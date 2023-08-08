import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {ClientServiceService} from 'src/app/pages/services/Client_Service/client-service.service';
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service';
import { NzMessageService } from 'ng-zorro-antd/message'


@Component({
  selector: 'editeChantier',
  templateUrl: './edite-Chantier.component.html',
  styles: [
    `
      nz-date-picker ::ng-deep .ant-calendar-picker {
        width: 100%;
      }

      nz-date-picker,
      nz-time-picker {
        width: 100%;
      }
    `,
    
  ],
})
export class editeChantierComponent implements OnInit {
  //-------Varaiables
  listClients;
  ChantierForm: FormGroup;
  userFile: any;
  id;
  chantier;
  //--------------
  
  constructor(private ChantierService: ChantierService, private ClientService  : ClientServiceService
            ,private nzMessageService: NzMessageService,private fb: FormBuilder,private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getClients();
    this.id = this.route.snapshot.params.id;
    this.ChantierService.showChantier(this.route.snapshot.params.id).subscribe(data => {
      this.chantier = data;
    }, (error) => {
      console.log(error);
    });
    this.ChantierForm = this.fb.group({
      intitule: ['', [Validators.required]],
      id_Clt: ['', [Validators.required]],
      statut: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      ville: ['', [Validators.required]],
    })
     
     // this.initForm1();
  }
  getClients() {
    this.ClientService.getClients()
    .subscribe(data=>{
      this.listClients = data;
    }, (error) => {
      console.log(error);
    }
   );
  }

  //----------------------------update-----------------------
  onUpdateChantier() {
      this.ChantierService.editeChantier(this.id, this.ChantierForm.value).subscribe(data => {
      this.router.navigate(['/advanced/Chantiers']);
      this.nzMessageService.success("Chantier modifié avec success.");
      }, (error) => {
          console.log(error);
      });
  }

  AjouterClient(){
    this.router.navigate(['/advanced/Clients']);
  }

}
