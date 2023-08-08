import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ChantierService {
 
  host = 'http://localhost:8080/chantiers';
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }

  getChantiers() {
    return this.http.get(this.host,{headers:this.headers});
  }
  getFliterChantiers(id) {
    return this.http.get(this.host + '/fliter/'+id,{headers:this.headers});
  }
  saveChantier(formData: FormData ) {
    return this.http.post(this.host, formData,{headers:this.headers});
  }

  saveChantierCl(formData: FormData ) {
    return this.http.post(this.host + '/EnregistrerChantier', formData,{headers:this.headers});
  }

  //supprimer
  deleteChantier(id){
    return this.http.delete(this.host + '/' + id,{headers:this.headers});
  }
  //update 
  editeChantier(id,chantier){
    return this.http.put(this.host+ '/' +id, chantier,{headers:this.headers});
  }
  //show 
  showChantier(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }
  //getTachesByChantier 
     getTachesByChantier(id){
      return this.http.get(this.host + '/' + id + '/taches',{headers:this.headers});
    }
  //
  getClt(id){
    return this.http.get(this.host + '/' + id + '/client',{headers:this.headers});
  }


  //-----------------------------------------------------
  getAllArticlChantier(id){
    return this.http.get(this.host + '/all/' + id,{headers:this.headers});
  }

  getNombreChantierBYear(){
    return this.http.get(this.host +'/data',{headers:this.headers});
    }
    getChantierVHT(){
      return this.http.get(this.host +'/vht',{headers:this.headers});
      }

      getEmployeVh(id){
        return this.http.get(this.host +'/employe/vht/'+id,{headers:this.headers});
      }
      getEmployeVhPlanig(id){
        return this.http.get(this.host +'/employe/vhtTotal/'+id,{headers:this.headers});
      }
  getNombreEmployeTacheChantier(id){
    return this.http.get(this.host +'/data2/'+id,{headers:this.headers});
   }

}
