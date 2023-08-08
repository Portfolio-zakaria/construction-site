import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwt: string;
  username: string;
  roles: Array<String>;

  host ='http://localhost:8080';
  constructor(private http: HttpClient,private router: Router) { }
  login(data) {
    return this.http.post(this.host + '/login', data, {observe: 'response'})
  }

  logOut() {
    localStorage.removeItem('tokenChef')
    this.router.navigate(['auth/login'])
    this.initParams()
  }

  signup(data){
    return this.http.post(this.host,data);
  }

  saveToken(jwt: string) {
    localStorage.setItem('tokenChef',jwt);
    this.jwt = jwt;
    this.parseJWT();
  }
parseJWT(){
  const jwtHelper = new JwtHelperService();
  const jwtObject = jwtHelper.decodeToken(this.jwt);
  this.username = jwtObject.obj;
  this.roles = jwtObject.roles;
}

loadToken(){
  this.jwt=localStorage.getItem('tokenChef');
  this.parseJWT();
}
initParams(){
  this.username=undefined;
  this.jwt=undefined;
  this.roles=undefined;
}
/*
isAdmin(){
 return  this.roles.indexOf('ADMIN')>=0;
}*/
isUser(){
  return  this.roles.indexOf('USER')>=0;
 }
 /*
 isAuthenticated(){
   return this.roles && (this.isAdmin() || this.isUser());
 }*/
 isAuthenticated(){
  return  this.isUser();
}
}
