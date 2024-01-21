import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loginarray: any[] = [];

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router: Router) {
    this.username = '';
    this.password = '';
  }

  
  ngAfterViewInit() {
    const clientId = localStorage.getItem('clientId');
    if (clientId) { 
      this.router.navigate(['/orders']); 
    }
  }

  login() {
    if (!this.username || !this.password) {
      // Handle the case where either the username or password is blank
      console.log('Username and password are required.');
      this.openSnackBar('Username and password are required.', 'Close');
      // alert.
      return; // Exit the function to prevent further execution
    }
    // Implement your login logic here, e.g., call a service for authentication
    this.loginService.loginapp(this.username, this.password ).subscribe((data: any) => {
      this.loginarray = data;
      if (this.loginarray[0].client_cnt == "0") {
        this.openSnackBar('Wrong Username and password', 'Try Again');
      } else {
        localStorage.setItem('clientId', this.password);
        this.router.navigate(['/orders']);      
      }
      });    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Duration the snackbar will be visible (in milliseconds)
    });
  }
}
