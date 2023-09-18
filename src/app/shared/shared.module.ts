import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicInfoComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [BasicInfoComponent, ReactiveFormsModule],
})
export class SharedModule {}
