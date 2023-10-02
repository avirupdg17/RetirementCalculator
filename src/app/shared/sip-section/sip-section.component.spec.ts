import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipSectionComponent } from './sip-section.component';

describe('SipSectionComponent', () => {
  let component: SipSectionComponent;
  let fixture: ComponentFixture<SipSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
