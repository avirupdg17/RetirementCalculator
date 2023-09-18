import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { CalculationFormComponent } from './calculation-form/calculation-form.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SidenavContentComponent, CalculationFormComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [SidenavContentComponent],
})
export class SidenavModule {}
