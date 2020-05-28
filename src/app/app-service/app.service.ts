import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  signedIn: boolean = false;

  constructor(public router: Router, private locationStrategy: LocationStrategy,private http: HttpClient) {
    
    //this.getOppsData().subscribe(data=> console.log("data" + JSON.stringify(data)));
  }

  signIn(redirectUrl?: string) {
    this.signedIn = true;
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  signOut(redirectUrl?: string) {
    this.signedIn = false;
    if (!redirectUrl) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  getOppsData(){
    return this.http.get('assets/opps.json');    
  }
}
