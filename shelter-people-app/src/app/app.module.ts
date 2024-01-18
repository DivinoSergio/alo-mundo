import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneMaskDirective } from './util/phone-mask.directive';

/**
 import { MatButtonModule } from '@angular/material/button';
 import { MatCardModule } from '@angular/material/card';
 import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
 import { MatDialog, MatDialogModule } from '@angular/material/dialog';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatIconModule } from '@angular/material/icon';
 import { MatInputModule } from '@angular/material/input';
 import { MatSelectModule } from '@angular/material/select';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatListModule } from '@angular/material/list';
 import { MatPaginatorModule } from '@angular/material/paginator';
 */

@NgModule({
  declarations: [PhoneMaskDirective],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    /**
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    MatRippleModule
    */
  ]
})
export class AppModule { }
