import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-sip-section',
  templateUrl: './sip-section.component.html',
  styleUrls: ['./sip-section.component.scss'],
})
export class SipSectionComponent {
  checked: boolean = false;
  public sipAmountForm: FormGroup;
  @Output() valueChangeEvent = new EventEmitter<any>();
  constructor(private _formBuilder: FormBuilder) {
    this.sipAmountForm = this._formBuilder.group({
      'FD/RD': [0],
      'Debt Mutual Fund': [0],
      'Equity Mutual Fund': [0],
    });
  }
  ngOnInit(): void {
    this.sipAmountForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((val) => {
        this.valueChangeEvent.emit({
          value: { sip_amount: JSON.stringify(val) },
          section: 'sip_amount',
          status: this.sipAmountForm.status,
        });
      });
  }
}
