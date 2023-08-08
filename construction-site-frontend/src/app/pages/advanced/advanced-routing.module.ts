import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// layout
import { AdvancedTypographyComponent } from 'src/app/pages/advanced/typography/typography.component'
import { AdvancedMailTemplatesComponent } from 'src/app/pages/advanced/mail-templates/mail-templates.component'
import { AdvancedUtilitiesComponent } from 'src/app/pages/advanced/utilities/utilities.component'
import { AdvancedGridComponent } from 'src/app/pages/advanced/grid/grid.component'
import { AdvancedFormExamplesComponent } from 'src/app/pages/advanced/Clients/form-examples.component'
import { editeClientComponent } from 'src/app/pages/advanced/Clients/edite-Client/edite-Client.component'
import { AdvancedInvoiceComponent } from 'src/app/pages/advanced/invoice/invoice.component'
import { AdvancedPricingTablesComponent } from 'src/app/pages/advanced/pricing-tables/pricing-tables.component'
import { AdvancedColorsComponent } from 'src/app/pages/advanced/Chantiers/colors.component'
import { ChantierComponent } from 'src/app/pages/advanced/chantiers2/chantier/chantier.component'
import { editeChantierComponent } from 'src/app/pages/advanced/Chantiers/edite-Chantier/edite-Chantier.component'
import { EditeTachesChantiersComponent } from 'src/app/pages/advanced/Taches/edite-Tache/edite-tache.component'
import { TacheComponent } from './Taches/tache.component'
import { PlanningComponent } from './planning/planning.component'
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
import { ListCommandeComponent } from 'src/app/pages/advanced/commandes/list-commande/list-commande.component'
import { ShowCommandeComponent  } from 'src/app/pages/advanced/commandes/show-commande/show-commande.component'
import { NewCommandeComponent } from 'src/app/pages/advanced/commandes/new-commande/new-commande.component'
import { TableauBordComponent } from 'src/app/pages/advanced/tableau-bord/tableau-bord.component'
import { BoiteComponent } from './boite/boite.component'
const routes: Routes = [
  {
    path: 'tableau-bord',
    component: TableauBordComponent,
    data: { title: 'Tableau Bord' },
  },
  {
    path: 'boite',
    component: BoiteComponent,
    data: { title: 'Boite Email' },
  },
  {
    path: 'email-templates',
    component: AdvancedMailTemplatesComponent,
    data: { title: 'Advanced / Mail Templates' },
  },
  {
    path: 'typography',
    component: AdvancedTypographyComponent,
    data: { title: 'Advanced / Typography' },
  },
  {
    path: 'planning',
    component: PlanningComponent,
    data: { title: 'Planning' },
  },
  {
    path: 'Taches',
    component: TacheComponent,
    data: { title: 'Taches' },
  },
  {
    path: 'Clients',
    component: AdvancedFormExamplesComponent,
    data: { title: 'Clients' },
  },
  {
    path: 'Clients/edite-Client/:id',
    component: editeClientComponent,
    data: { title: 'Edite' },
  },
  {
    path: 'Chantiers/edite-Chantier/:id',
    component: editeChantierComponent,
    data: { title: 'Edite' },
  },
  {
    path: 'chantiers2',
    component: ChantierComponent,
    data: { title: 'chantiers2' },
  },
  {
    path: 'Taches/edite-Tache/:id',
    component: EditeTachesChantiersComponent,
    data: { title: 'Edite' },
  },
  {
    path: 'Chantiers',
    component: AdvancedColorsComponent,
    data: { title: 'Chantiers' },
  },
  //-----------------------------------
  {
    path: 'employes/employes-list',
    component:EmployesListComponent ,
    data: { title: 'employes' },
  },
  {
    path: 'employes/edite-employe/:id',
    component: EditeEmployeComponent,
    data: { title: 'Edite' },
  },
  {
    path: 'employes/new-employe',
    component: NewEmployeComponent,
    data: { title: 'Ajouter' },
  },
  //-------------------------------------
  {
    path: 'fournisseur/fournisseur-list',
    component:FournisseurListComponent ,
    data: { title: 'employes' },
  },
  {
    path: 'fournisseur/edite-fournisseur/:id',
    component: EditeFournisseurComponent,
    data: { title: 'Edite' },
  },
  {
    path: 'fournisseur/new-fournisseur',
    component: NewFournisseurComponent,
    data: { title: 'Ajouter' },
  },
  {
    path: 'fournisseur/single-fournisseur/:id',
    component: SingleFournisseurComponent,
    data: { title: 'Voir' },
  },
  //--------------------------------------
  {
    path: 'soustraitant',
    component: NewSousTraitantComponent,
    data: { title: 'Sous-traitant' },
  },
  {
    path: 'soustraitant/edite-sous-traitant/:id',
    component: EditeSousTraitantComponent,
    data: { title: 'Sous-traitant' },
  },
//----------------------------------------------
{
  path: 'articles/articles-list',
  component:ArticlesListComponent ,
  data: { title: 'articles' },
},
{
  path: 'articles/articles-edite/:id',
  component: ArticlesEditeComponent,
  data: { title: 'Edite' },
},
{
  path: 'articles/articles-new',
  component: ArticlesNewComponent,
  data: { title: 'Ajouter' },
},
//--------------------------------------------------
{
  path: 'categories/category-list',
  component:CategoryListComponent ,
  data: { title: 'Catégories' },
},
{
  path: 'categories/edite-category/:id',
  component: EditeCategoryComponent,
  data: { title: 'Edite' },
},
{
  path: 'categories/new-category',
  component: NewCategoryComponent,
  data: { title: 'Ajouter' },
},
//--------------------------------------------------
{
  path: 'materiels/materiels-list',
  component: MaterilesListComponent ,
  data: { title: 'Matérielles' },
},
{
  path: 'materiels/edite-materiel/:id',
  component: EditeMaterielComponent,
  data: { title: 'Edite' },
},
{
  path: 'materiels/new-materiel',
  component: NewMaterielComponent,
  data: { title: 'Ajouter' },
},
//--------------------------------------------------
{
  path: 'commandes/list-commande',
  component: ListCommandeComponent ,
  data: { title: 'Commande' },
},
{
  path: 'commandes/show-commande/:id',
  component: ShowCommandeComponent,
  data: { title: 'Edite' },
},
{
  path: 'commandes/new-commande',
  component: NewCommandeComponent,
  data: { title: 'Ajouter' },
},


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedRouterModule {}
