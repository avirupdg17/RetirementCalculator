import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { Moment } from 'moment';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { DataServiceService } from 'src/app/services/data-service.service';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class SidenavContentComponent {
  date = new FormControl(moment());
  public finalForm: any = {};
  public retirementAge: any;
  public isLoading: boolean = false;
  public isValid: boolean = false;
  public to_calculate:string = '';
  setMonthAndYear(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  constructor(private dataService: DataServiceService) {}
  onValueChange(event: any) {
    this.finalForm = { ...this.finalForm, ...event.value };
    this.to_calculate = this.finalForm['monthly_expenses']
      ? 'fi_age'
      : 'monthly_expenses';
    this.finalForm = {
      ...this.finalForm,
      to_calculate: this.to_calculate,
      confidence: 95,
    };
    this.isValid =
      event.section === 'basic-info' ? event.status === 'VALID' : this.isValid;
  }
  submitForm() {
    this.isLoading = true;
    let url = 'https://work-this-weekend.vercel.app/calculate';
    const attr = new URLSearchParams();
    Object.keys(this.finalForm).forEach((key) => {
      attr.set(key, (this.finalForm as any)[key]);
    });
    console.log(attr);
    // const attr = { ...this.basicFormGroup.value };
    this.dataService.postData(url, attr).subscribe((res: any) => {
      this.retirementAge = res.result;
      this.isLoading = false;
    });
  }
}
