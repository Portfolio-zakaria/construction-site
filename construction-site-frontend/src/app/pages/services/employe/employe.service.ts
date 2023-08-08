import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'


@Injectable({
  providedIn: 'root'
})

export class EmployeService {
 host = 'http://localhost:8080/employes';
 headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }

 getEmployes() {
    return this.http.get(this.host ,{headers:this.headers});
  }

  saveEmployes(employe) {
    return this.http.post(this.host , employe,{headers:this.headers});
  }
  showEmploye(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }

  deleteEmploy(id){
    return this.http.delete(this.host + '/' + id,{headers:this.headers});
  }
  editeEMploye(id,employe ){
    return this.http.put(this.host + '/' + id, employe,{headers:this.headers});
  }

  affecterEmploye(formData:FormData){
    return this.http.post(this.host +'/Affectation', formData,{headers:this.headers});
  }

}
