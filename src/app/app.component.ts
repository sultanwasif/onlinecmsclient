import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-cms';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isClientLogin : boolean = false;

  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngAfterViewInit() {

    const clientId = localStorage.getItem('clientId');
    if (clientId) { 
this.isClientLogin = true;
    } else {
      this.isClientLogin = false;
    }

    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }

  openOrder() {
    this.router.navigate(['/orders']); 
  }

  openPayments() {
    this.router.navigate(['/payment']); 
  }

  logout() {
    localStorage.removeItem('clientId');
    this.router.navigate(['/login']); 
  }
  login() {
    this.router.navigate(['/login']); 
  }

}

