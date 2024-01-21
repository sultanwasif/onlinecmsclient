import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //private apiUrl = 'http://apigreen.ehfservices.com/api/Order/getclientorders';
  private apiUrl = 'http://smartersultan-001-site1.atempurl.com/api/Order/getclientorders';

  constructor(private http: HttpClient) { 
    
  }
  getOrders(clientid: string, customerMobile?: string, voucherno?: string, startdate?: string, enddate?: string) {
    // Construct the URL with query parameters
      const url = `${this.apiUrl}?clientid=${clientid}&customerMobile=${customerMobile}&voucherno=${voucherno}&startdate=${startdate}&enddate=${enddate}`;
      return this.http.get(url);
    
  }
}
