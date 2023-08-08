import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TacheService } from 'src/app/pages/services/Tache/tache.service';

@Component({
  selector: 'app-edite-tache',
  templateUrl: './edite-tache.component.html',
  styleUrls: ['./edite-tache.component.scss']
})
export class EditeTachesChantiersComponent implements OnInit {
  TacheForm: FormGroup;
  id;
  tache;

  constructor(private TacheService: TacheService,private router: Router,private route: ActivatedRoute, private fb :FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.TacheService.showTache(this.route.snapshot.params.id).subscribe(data => {
      this.tache = data;
    }, (error) => {
      console.log(error);
    });

    this.TacheForm = this.fb.group({
      intitule : ['', [Validators.required]],
      vh: ['', [Validators.required]],

    })

  }
    //----------------------------update-----------------------
    onUpdateTache() {
      this.TacheService.editeTache(this.id, this.TacheForm.value).subscribe(data => {
      this.router.navigate(['/advanced/Taches']);
      alert("Information modifié");
      }, (error) => {
          console.log(error);
      });
  }

}
