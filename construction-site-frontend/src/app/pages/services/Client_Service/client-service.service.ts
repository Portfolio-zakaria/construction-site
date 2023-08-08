import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  host = 'http://localhost:8080/clients';
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }


  getClients() {
    return this.http.get(this.host,{headers:this.headers});
  }
  
  saveClient(formData: FormData ) {
    return this.http.post(this.host, formData,{headers:this.headers});
  }

  //supprimer
  deleteClient(id){
    return this.http.delete(this.host + '/' + id,{headers:this.headers});
  }
  //update 
  editeClient(id,client){
    return this.http.put(this.host+ '/' +id, client,{headers:this.headers});
  }
  //show 
  showClient(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }


}
