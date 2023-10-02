import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  private url = 'https://work-this-weekend.vercel.app/set_user_details';
  public fi_age_required: boolean = true;
  public monthly_expenses: boolean = false;
  public basicFormGroup: FormGroup;
  @Output() valueChangeEvent = new EventEmitter<any>();
  constructor(
    private _formBuilder: FormBuilder,
    private dataService: DataServiceService
  ) {
    this.basicFormGroup = this._formBuilder.group({
      current_age: ['', Validators.required],
      fi_age: [''],
      lifespan: ['', Validators.required],
      monthly_expenses: [''],
    });
  }
  ngOnInit(): void {
    this.basicFormGroup.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((val) => {
        this.valueChangeEvent.emit({
          value: { ...val },
          section: 'current-corpus',
          status: this.basicFormGroup.status,
        });
      });
  }
  saveBasicInfo() {
    const attr = new URLSearchParams();
    Object.keys(this.basicFormGroup.value).forEach((key) => {
      attr.set(key, (this.basicFormGroup as any)['value'][key]);
    });
    // const attr = { ...this.basicFormGroup.value };
    this.dataService
      .postData(this.url, attr)
      .subscribe((res) => console.log(res));
  }
  disable(field: string) {
    if (field === 'fi_age') {
      this.fi_age_required = !this.fi_age_required;
      this.monthly_expenses = !this.monthly_expenses;
      if (!this.fi_age_required) {
        this.basicFormGroup.controls['fi_age'].enable();
        this.basicFormGroup.controls['monthly_expenses'].disable();
      } else {
        this.basicFormGroup.controls['fi_age'].disable();
        this.basicFormGroup.controls['monthly_expenses'].enable();
      }
    } else {
      this.monthly_expenses = !this.monthly_expenses;
      this.fi_age_required = !this.fi_age_required;
      if (this.monthly_expenses) {
        this.basicFormGroup.controls['fi_age'].enable();
        this.basicFormGroup.controls['monthly_expenses'].disable();
      } else {
        this.basicFormGroup.controls['fi_age'].disable();
        this.basicFormGroup.controls['monthly_expenses'].enable();
      }
    }
  }
}
