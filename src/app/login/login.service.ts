import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  // private apiUrl = 'http://apigreen.ehfservices.com/api/Order/loginapp';
  private apiUrl = 'http://smartersultan-001-site1.atempurl.com/api/Order/loginapp';

constructor(private http: HttpClient) { 
  
}
loginapp(clientMobile: string, clientId: string) {
  // Construct the URL with query parameters
  const url = `${this.apiUrl}?&clientId=${clientId}&clientMobile=${clientMobile}`;

  return this.http.get(url);
}
}
