import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommandeService } from 'src/app/pages/services/commandes/commande.service';
import { EmailModule } from 'src/app/pages/advanced/models/email/email.module';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';


//import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-show-commande',
  templateUrl: './show-commande.component.html',
  styleUrls: ['./show-commande.component.css']
})
export class ShowCommandeComponent implements OnInit {
  htmlData: any;
  constructor(private commandesService: CommandeService, private route: ActivatedRoute, private router: Router,
            private notification: NzNotificationService) { }
id: number;
chantier;
fournisseur;
listArticle;
total = 0;
text;
totlaTva:number;

@ViewChild('content') content: ElementRef;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getchantier();
    this.getFournisseur();
    this.getArticleByCommande();
  }

getchantier(){
  this.commandesService.getCommandeChantier(this.id).subscribe(data => {
    this.chantier = data;
  }, (error) => {
    console.log(error);
  });
}

getFournisseur(){
  this.commandesService.getCommandeFournisseur(this.id).subscribe(data => {
    this.fournisseur = data;
  }, (error) => {
    console.log(error);
  });
}

getArticleByCommande(){
  this.commandesService.getArticleBYCommandes(this.id).subscribe(data => {
    this.listArticle = data;
    this.listArticle.forEach(element => {
      this.total += element[3] * element[4];
    });
    this.totlaTva=this.total+this.total*0.2;
  }, (error) => {
    console.log(error);
  });
}
  Annule(){
    this.router.navigate(['advanced/commandes/list-commande']);
  }
  downloadpdf(){
  /*  
  const doc = new jsPDF('p','pt', 'a4');
  let handler = {
      '#editor'(element: any, renderer: any){
        return true;
      }
    };
  const content =this.content.nativeElement;
  doc.fromHTML(content.innerHTML,15,15, {
  'with': 190,
  'elementHnandlers':handler
  });
  doc.save('test.pdf');*/
  
  }

  sendEmail(){
    this.text="";
    let email: EmailModule=new EmailModule();
    email.to=''+this.fournisseur.email;

    email.messageSubject="Demande d'approvisenment";

    this.text+='Bonjour  : '+this.fournisseur.nom + ' '+this.fournisseur.prenom+'\n \n ';
    this.text+='Nous vous envoyons ce-mail pour vous informer que nous avons besoin des matériels pour notre chantier dès que possible.\n Notre commande :\n';
    this.listArticle.forEach(a=>{
                this.text+=' - Réf Produit:  '+a[1]+' , Intitulé :'+a[2]+' , Quantité : '+a[4]+'\n';
              });
    this.text+='Adresse chantier : '+this.chantier.adresse+'\n';
    this.text+='Nous vous prions d\'agréer, Madame, Monsieur, l\'expression de nos cordiales salutations.';
    email.messageText=this.text;
    this.createNotification('success');

    this.commandesService.sendEmail(email).subscribe(data=>{
     
      }, (error) => {
    console.log(error);
  });
  }
  createNotification(type: string): void {
    this.notification.create(
      type,
      'Email envoyé avec success',
      'Vous avez envoyé un email au fournisseur.',
    )
  }
 

}
