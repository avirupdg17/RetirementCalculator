import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SipSectionComponent } from './sip-section/sip-section.component';
import { CurrentCorpusComponent } from './current-corpus/current-corpus.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    BasicInfoComponent,
    SipSectionComponent,
    CurrentCorpusComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    BasicInfoComponent,
    ReactiveFormsModule,
    HttpClientModule,
    SipSectionComponent,
    CurrentCorpusComponent,
    ResultComponent,
  ],
})
export class SharedModule {}
