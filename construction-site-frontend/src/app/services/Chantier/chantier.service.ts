import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChantierService {

  host = 'http://localhost:8080/chantiers';
  constructor(private http: HttpClient) { }

  getChantiers() {
    return this.http.get(this.host);
  }
  
  saveChantier(formData: FormData ) {
    return this.http.post(this.host, formData);
  }

  saveChantierCl(formData: FormData ) {
    return this.http.post(this.host + '/EnregistrerChantier', formData);
  }

  //supprimer
  deleteChantier(id){
    return this.http.delete(this.host + '/' + id);
  }
  //update 
  editeChantier(id,chantier){
    return this.http.put(this.host+ '/' +id, chantier);
  }
  //show 
  showChantier(id){
    return this.http.get(this.host + '/' + id);
  }
  //getTachesByChantier 
     getTachesByChantier(id){
      return this.http.get(this.host + '/' + id + '/taches');
    }

}
