import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login-module/login/login.component';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent {
  constructor(public dialog: MatDialog) {}
  openLoginForm() {
    this.dialog.open(LoginComponent, {
      width: '60vw',
      height: '60vh',
    });
  }
}
