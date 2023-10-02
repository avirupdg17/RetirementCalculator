import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCorpusComponent } from './current-corpus.component';

describe('CurrentCorpusComponent', () => {
  let component: CurrentCorpusComponent;
  let fixture: ComponentFixture<CurrentCorpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCorpusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCorpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
