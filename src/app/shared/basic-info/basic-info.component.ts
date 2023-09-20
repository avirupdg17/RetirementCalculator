import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent {
  private url = 'https://work-this-weekend.vercel.app/set_user_details';
  constructor(
    private _formBuilder: FormBuilder,
    private dataService: DataServiceService
  ) {}
  basicFormGroup = this._formBuilder.group({
    current_age: ['', Validators.required],
    fi_age: ['', Validators.required],
    lifespan: ['', Validators.required],
  });
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
}
