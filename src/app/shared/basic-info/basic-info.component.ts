import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent {
  constructor(private _formBuilder: FormBuilder) {}
  basicFormGroup = this._formBuilder.group({
    currentAge: ['', Validators.required],
    financialAge: ['', Validators.required],
    lifeSpan: ['', Validators.required],
  });
}
