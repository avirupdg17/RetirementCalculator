import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.scss'],
})
export class CalculationFormComponent implements OnInit {
  public calcForm: FormGroup;
  constructor() {
    this.calcForm = new FormGroup({});
  }

  createForm() {
    this.calcForm = new FormGroup({
      income: new FormControl('', [Validators.required]),
      sgb: new FormControl('', [Validators.required]),
      ppf: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {}
}
