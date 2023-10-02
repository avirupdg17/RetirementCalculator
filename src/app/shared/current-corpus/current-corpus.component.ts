import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-current-corpus',
  templateUrl: './current-corpus.component.html',
  styleUrls: ['./current-corpus.component.scss'],
})
export class CurrentCorpusComponent implements OnInit {
  checked: boolean = false;
  public currentCorpusForm: FormGroup;
  @Output() valueChangeEvent = new EventEmitter<any>();
  constructor(private _formBuilder: FormBuilder) {
    this.currentCorpusForm = this._formBuilder.group({
      fi_portfolio_type: ['balanced', Validators.required],
      'FD/RD': ['0'],
      'Debt Mutual Fund': ['0'],
      'Equity Mutual Fund': ['0'],
    });
  }
  ngOnInit(): void {
    this.currentCorpusForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((val) => {
        let fi_portfolio_type = val['fi_portfolio_type'];
        delete val['fi_portfolio_type'];
        this.valueChangeEvent.emit({
          value: {
            corpus_amounts: JSON.stringify(val),
            fi_portfolio_type: fi_portfolio_type,
          },
          section: 'corpus_amounts',
          status: this.currentCorpusForm.status,
        });
      });
  }
}
