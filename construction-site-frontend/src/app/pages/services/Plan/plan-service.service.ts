import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class PlanServiceService {

 
  host = 'http://localhost:8080/planifications';
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }

  getplans() {
    return this.http.get(this.host,{headers:this.headers});
  }
  
  savePlan(formData: FormData ) {
    return this.http.post(this.host, formData,{headers:this.headers});
  }

  savePlanCh(formData: FormData ) {
    return this.http.post(this.host + '/EnregistrerPlan', formData,{headers:this.headers});
  }

  //supprimer
  deletePlan(id){
    return this.http.delete(this.host + '/' + id,{headers:this.headers});
  }
  //update 
  editeplan(id,plan){
    return this.http.put(this.host+ '/' +id, plan,{headers:this.headers});
  }
  //show 
  showPlan(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }
  
   //show 
   showPlanTache(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }


}
