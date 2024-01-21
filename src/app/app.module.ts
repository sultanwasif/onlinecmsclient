import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component'; // Import MatButtonModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { OrderCardComponent } from './order-card/order-card.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    OrderViewComponent,
    LoginComponent,
    PaymentListComponent,
    OrderCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    MatTableModule, // Add MatTableModule
    MatInputModule, // Add MatInputModule
    MatButtonModule, // Add MatButtonModule
    FormsModule, // Add FormsModule here
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule, // Add the MatButtonModule to the imports array
    MatIconModule, // Add the MatIconModule to the imports array
    MatDividerModule, // Add the MatDividerModule to the imports array
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
