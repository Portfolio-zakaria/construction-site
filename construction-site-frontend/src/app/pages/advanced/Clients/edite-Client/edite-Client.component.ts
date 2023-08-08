import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {ClientServiceService} from 'src/app/pages/services/Client_Service/client-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { NzMessageService } from 'ng-zorro-antd/message'


@Component({
  selector: 'editeClient',
  templateUrl: './edite-Client.component.html',
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
export class editeClientComponent implements OnInit {
  //-------Varaiables
  
  ClientForm1: FormGroup;
  userFile: any;
  id;
  client;
  //--------------
  
  constructor(private ClientService: ClientServiceService,private fb: FormBuilder,private router: Router
              ,private nzMessageService: NzMessageService,private route: ActivatedRoute) {
                console.log(this.route);
              }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.ClientService.showClient(this.route.snapshot.params.id).subscribe(data => {
      this.client = data;
    }, (error) => {
      console.log(error);
    });
    this.ClientForm1 = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      statuCivilite: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      suiteAdress: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],
      typeTier: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
     
     // this.initForm1();
  }


  //----------------------------update-----------------------
  onUpdateClient() {
      this.ClientService.editeClient(this.id, this.ClientForm1.value).subscribe(data => {
      this.router.navigate(['/advanced/Clients']);
      this.nzMessageService.success("Client modifié avec success.");
      }, (error) => {
          console.log(error);
      });
  }

}
