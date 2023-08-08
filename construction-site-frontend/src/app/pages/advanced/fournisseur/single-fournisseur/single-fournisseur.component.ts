import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'src/app/pages/services/fournisseur/fournisseur.service';


@Component({
  selector: 'app-single-fournisseur',
  templateUrl: './single-fournisseur.component.html',
  styleUrls: ['./single-fournisseur.component.css']
})
export class SingleFournisseurComponent implements OnInit {
  fournisseur;
  id;
  materiel;
  constructor(
    private route: ActivatedRoute ,
    public fourniService: FournisseurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.fourniService.showFournisseur(this.route.snapshot.params.id).subscribe(data => {
      this.fournisseur = data;
    }, (error) => {
      console.log(error);
    });
   
  }



  onBack() {
    this.router.navigate(['advanced/fournisseur/fournisseur-list']);
  }

}
