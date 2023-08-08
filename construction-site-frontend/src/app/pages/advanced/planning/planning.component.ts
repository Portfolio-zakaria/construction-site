import { Component, OnInit, ViewChild  } from '@angular/core'
import { formatDate, NgForOf } from '@angular/common'
import { ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule'
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule'
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TacheService } from 'src/app/pages/services/Tache/tache.service'
import { PlanServiceService } from 'src/app/pages/services/Plan/plan-service.service'
import { EmployeService } from 'src/app/pages/services/employe/employe.service'
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
/*export class TableData {
   id: number
   nom: string
   prenom: string
   profil: string
   vht: number
}*/

export class PlanningComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent
  public selectedDate: Date = new Date()
  public scheduleViews: View[] = ['Month', 'Day', 'Week', 'WorkWeek']
  listeEmpvht
  // public scheduleViews: View[] = ['Month'];


constructor(private fb: FormBuilder, private ChantierService: ChantierService, private TacheService: TacheService,
             private PlanServiceService: PlanServiceService, private EmployeService: EmployeService) { }
  listChantiers
  listeEmp
  PlanForm: FormGroup
  date = null // new Date();
  date1 // new Date();
  listTaches
  currentChId
  tacheId; tache; Intitule; debut; fin; monthD; dayD; monthF; dayF; planification; tache2; listTaches1
  isVisible = false
  // --------------------
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0
  listOfDisplayData
  listIds: Array<BigInteger> = []

  //listeEMPVHT:Array<TableData>= []
  ajouterIdid(id) {
    const i = this.listIds.indexOf(id)
    if ( i === -1) {
      this.listIds.push(id)
    } else {
      this.listIds.splice(i, 1)
    }

  }



  handleOk(): void {
    this.AffecterEmployes()
    this.isVisible = false
  }


AffecterEmployes() {
  const formData = new FormData()
  formData.append('ListeIdsEmp', JSON.stringify(this.listIds))
  formData.append('idtache', JSON.stringify(this.tacheId))
  this.EmployeService.affecterEmploye(formData).subscribe(data => {
  }, (error) => {
   console.log(error)
  })

}






  ngOnInit(): void {
  this.getEmp()
  this.getChantiers()
  this.PlanForm = this.fb.group({
    id_Chantier : ['', [Validators.required]],
    id_tache: ['', [Validators.required]],
    date_start: ['', [Validators.required]],
    date_fin: ['', [Validators.required]],
  })

  }
  // -------------
    getEmp() {
      this.EmployeService.getEmployes()
      .subscribe(data => {
        this.listeEmp = data
      }, (error) => {
        console.log(error)
      }
     )
  }

  getEmpVht(deviceValue) {
    this.ChantierService.getEmployeVhPlanig(deviceValue)
    .subscribe(data => {
      this.listeEmpvht = data
      console.log('employe vht')
      console.log(this.listeEmpvht)
    }, (error) => {
      console.log(error)
    }
   )
}
/*getEMpVHTFinal() {
  let obj: TableData
  this.listeEmpvht.array.forEach(el => {
    this.listeEmp.array.forEach(e => {
      if (el[0] === e.id) {
       
        obj.id = e.id
        obj.nom = e.nom
        obj.prenom = e.prenom
        obj.profil = e.profil
        obj.vht = el[3]
        this.listeEMPVHT.push(obj)
      }
    })
  })
  console.log(this.listeEMPVHT)
}*/
  // -------------
  getChantiers() {
      this.ChantierService.getChantiers()
      .subscribe(data => {
        this.listChantiers = data
      }, (error) => {
        console.log(error)
      }
     )
  }
  // --------------
  AfficherTaches(deviceValue) {
      this.ChantierService.getTachesByChantier(deviceValue)
      .subscribe(data => {
        this.listTaches = data
        // this.getPlanningCh();
       // alert(deviceValue)
        this.currentChId = deviceValue
      }, (error) => {
        console.log(error)
      }
     )
  }

getTaches(idCh) {

}

// Get Planning Chantier-----------------------------------------------------------------------------------------------
getPlanningCh() {
  this.scheduleObj.resetLayoutTemplates
  this.scheduleObj.destroy
    let data2: Object[]
    for (const t of this.listTaches._embedded.taches) {

        this.TacheService.getPlan(t.id_tache).subscribe(data => {
        this.planification = data


        this.afficherplan(this.planification, t.id_tache)

        this.debut = formatDate(this.planification.date_start, 'yyyy', 'en-US')
        this.fin = formatDate(this.planification.date_fin, 'yyyy', 'en-US')
        this.dayD = formatDate(this.planification.date_start, 'dd', 'en-US')
        this.monthD = formatDate(this.planification.date_start, 'MM', 'en-US')
        this.dayF = formatDate(this.planification.date_fin, 'dd', 'en-US')
        this.monthF = formatDate(this.planification.date_fin, 'MM', 'en-US')
        this.getIntituleTache1(t.id_tache)
        this.scheduleObj.addEvent({
          Id: t.id_tache,
          Subject: this.tache2.intitule,
          StartTime: new Date(this.debut, this.monthD - 1, this.dayD, 9, 0),
          EndTime: new Date(this.fin, this.monthF - 1, this.dayF, 10, 0),
      })

        }, (error) => {
          console.log(error)
        })

    }


}

afficherplan(plan, idT) {

}

// -------------------------------------------------------------------------------------------------------------------



// Ajouter tache au planning
public addtache(): void {
  this.debut = formatDate(this.PlanForm.value.date_start, 'yyyy', 'en-US')
  this.fin = formatDate(this.PlanForm.value.date_fin, 'yyyy', 'en-US')
  this.dayD = formatDate(this.PlanForm.value.date_start, 'dd', 'en-US')
  this.monthD = formatDate(this.PlanForm.value.date_start, 'MM', 'en-US')
  this.dayF = formatDate(this.PlanForm.value.date_fin, 'dd', 'en-US')
  this.monthF = formatDate(this.PlanForm.value.date_fin, 'MM', 'en-US')
  this.getIntituleTache()
  const data: Object[] = [{
      Id: 3,
      Subject: this.tache.intitule,
      StartTime: new Date(this.debut, this.monthD - 1, this.dayD, 9, 0),
      EndTime: new Date(this.fin, this.monthF - 1, this.dayF, 10, 0),
     // IsAllDay: true
  }]
  this.scheduleObj.addEvent(data)
  this.EnregistrerTache()

}

EnregistrerTache() {
  const formData = new FormData()
  formData.append('plan', JSON.stringify({date_start: this.PlanForm.value.date_start,
                  date_fin: this.PlanForm.value.date_fin}))
  formData.append('idtache', this.PlanForm.value.id_tache)
  this.PlanServiceService.savePlanCh(formData).subscribe(data => {
  }, (error) => {
  console.log(error)
  })

}


getIntituleTache1(idT) {
  this.TacheService.showTache(idT).subscribe(data => {
  this.tache2 = data
  }, (error) => {
    console.log(error)
  })
}


getTacheId(id) {
  this.tacheId = id
  this.getIntituleTache()
 // alert("Id Chantier : "+ this.currentChId + " Id tache : "+ this.tacheId  + "Inti : " + this.tache.intitule);
}

getIntituleTache() {
  this.TacheService.showTache(this.tacheId).subscribe(data => {
    this.tache = data
  }, (error) => {
    console.log(error)
  })
}

// ------------------------------------------
showModal(): void {
  this.isVisible = true
}


getSelectedEmps(id) {
  alert(id)
}



handleCancel(): void {
  console.log('Button cancel clicked!')
  this.isVisible = false
}



}
