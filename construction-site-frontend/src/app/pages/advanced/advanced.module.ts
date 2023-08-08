import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { AdvancedRouterModule } from './advanced-routing.module'
import { WidgetsComponentsModule } from 'src/app/components/kit/widgets/widgets-components.module'


// layout
import { AdvancedTypographyComponent } from 'src/app/pages/advanced/typography/typography.component'
import { AdvancedMailTemplatesComponent } from 'src/app/pages/advanced/mail-templates/mail-templates.component'
import { AdvancedUtilitiesComponent } from 'src/app/pages/advanced/utilities/utilities.component'
import { AdvancedGridComponent } from 'src/app/pages/advanced/grid/grid.component'
import { AdvancedFormExamplesComponent } from 'src/app/pages/advanced/Clients/form-examples.component'
import { AdvancedInvoiceComponent } from 'src/app/pages/advanced/invoice/invoice.component'
import { AdvancedPricingTablesComponent } from 'src/app/pages/advanced/pricing-tables/pricing-tables.component'
import { AdvancedColorsComponent } from 'src/app/pages/advanced/Chantiers/colors.component'
import { ChantierComponent } from 'src/app/pages/advanced/chantiers2/chantier/chantier.component'
import { editeClientComponent } from 'src/app/pages/advanced/Clients/edite-Client/edite-Client.component'
import { editeChantierComponent } from 'src/app/pages/advanced/Chantiers/edite-Chantier/edite-Chantier.component';
import { TacheComponent } from './Taches/tache.component';
import { EditeTachesChantiersComponent } from './Taches/edite-Tache/edite-tache.component'
import { ScheduleModule, RecurrenceEditorModule , DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { PlanningComponent } from './planning/planning.component';
import {EmployesListComponent} from 'src/app/pages/advanced/employes/employes-list/employes-list.component'
import {EditeEmployeComponent} from 'src/app/pages/advanced/employes/edite-employe/edite-employe.component'
import {NewEmployeComponent} from 'src/app/pages/advanced/employes/new-employe/new-employe.component'
import {FournisseurListComponent } from 'src/app/pages/advanced/fournisseur/fournisseur-list/fournisseur-list.component'
import { EditeFournisseurComponent} from 'src/app/pages/advanced/fournisseur/edite-fournisseur/edite-fournisseur.component'
import { NewFournisseurComponent} from 'src/app/pages/advanced/fournisseur/new-fournisseur/new-fournisseur.component'
import {SingleFournisseurComponent } from 'src/app/pages/advanced/fournisseur/single-fournisseur/single-fournisseur.component'
import { NewSousTraitantComponent } from 'src/app/pages/advanced/soustraitant/new-sous-traitant.component'
import { EditeSousTraitantComponent } from 'src/app/pages/advanced/soustraitant/edite-sous-traitant/edite-sous-traitant.component'
import { ArticlesListComponent } from 'src/app/pages/advanced/articles/articles-list/articles-list.component'
import { ArticlesEditeComponent } from 'src/app/pages/advanced/articles/articles-edite/articles-edite.component'
import { ArticlesNewComponent } from 'src/app/pages/advanced/articles/articles-new/articles-new.component'
import { CategoryListComponent } from 'src/app/pages/advanced/categories/category-list/category-list.component'
import { EditeCategoryComponent } from 'src/app/pages/advanced/categories/edite-category/edite-category.component'
import { NewCategoryComponent } from 'src/app/pages/advanced/categories/new-category/new-category.component'
import { MaterilesListComponent } from 'src/app/pages/advanced/materiels/materiels-list/articles-list.component'
import { EditeMaterielComponent } from 'src/app/pages/advanced/materiels/edite-materiel/articles-edite.component'
import { NewMaterielComponent  } from 'src/app/pages/advanced/materiels/new-materiel/articles-new.component'
import { NewCommandeComponent } from 'src/app/pages/advanced/commandes/new-commande/new-commande.component'
import { ListCommandeComponent } from 'src/app/pages/advanced/commandes/list-commande/list-commande.component'

import { ShowCommandeComponent  } from 'src/app/pages/advanced/commandes/show-commande/show-commande.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { BoiteComponent } from './boite/boite.component'
import { ChartsComponent } from 'src/app/pages/advanced/charts/charts/charts.component';
import { Charts2Component } from 'src/app/pages/advanced/charts/charts2/charts2.component';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


const COMPONENTS = [
  ListCommandeComponent,
  ShowCommandeComponent,
  NewCommandeComponent,
  MaterilesListComponent,
  EditeMaterielComponent,
  NewMaterielComponent,
  CategoryListComponent,
  EditeCategoryComponent,
  NewCategoryComponent,
  ArticlesListComponent,
  ArticlesEditeComponent,
  ArticlesNewComponent,
  NewSousTraitantComponent,
  EditeSousTraitantComponent,
  FournisseurListComponent,
  EditeFournisseurComponent,
  NewFournisseurComponent,
  SingleFournisseurComponent,
  EditeTachesChantiersComponent,
  AdvancedMailTemplatesComponent,
  AdvancedTypographyComponent,
  AdvancedUtilitiesComponent,
  AdvancedGridComponent,
  AdvancedFormExamplesComponent,
  AdvancedInvoiceComponent,
  AdvancedPricingTablesComponent,
  AdvancedColorsComponent,
  ChantierComponent,
  editeClientComponent,
  editeChantierComponent,
  TacheComponent,
  PlanningComponent,
  EmployesListComponent,
  EditeEmployeComponent,
  NewEmployeComponent,
  TableauBordComponent,
  ChartsComponent,
  Charts2Component,
  BoiteComponent,
]

@NgModule({
  imports: [
    SharedModule,
    AdvancedRouterModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsComponentsModule,
    ScheduleModule, 
    RecurrenceEditorModule,
    HttpClientModule,
    AngularEditorModule,

  ],
  declarations: [...COMPONENTS],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
})
export class AdvancedModule {}
