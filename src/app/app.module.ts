import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HeadersComponent } from './headers/headers.component';
import { LoginModuleModule } from './login-module/login-module.module';

import { SidenavModule } from './sidenav/sidenav.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, HeadersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModuleModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
