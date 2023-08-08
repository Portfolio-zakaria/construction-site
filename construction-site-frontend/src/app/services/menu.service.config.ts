export const getMenuData: any[] = [
    /////////////////Tableau de bord////////////////////
  {
    category: true,
    title: 'Tableau de bord',
  },
  {
    title: 'Tableau de bord',
    key: 'dashboards',
    icon: 'fa fa-bar-chart',
    url: '/advanced/tableau-bord',
  },
  /////////////////Affaires////////////////////
  {
    category: true,
    title: 'Affaires',
  },
   {
    title: 'Clients',
    key: 'formExamples',
    icon: 'fa fa-users',
    url: '/advanced/Clients',
  },
  {
    title: 'Chantiers',
    key: 'formExamples',
    icon: 'lnr lnr-apartment',
    url: '/advanced/Chantiers',
  },
  {
    title: 'Taches',
    key: 'Taches',
    icon: 'fa fa-calendar-check-o',
    url: '/advanced/Taches',
  },
  {
    title: 'Planning',
    key: 'utilities',
    icon: 'fa fa-calendar',
    url: '/advanced/planning',
  },

/////////////////Tiers////////////////////
   {
    category: true,
    title: 'Tiers',
  },
  {
    title: 'Client',
    key: 'antDesign',
    icon: 'fe fe-bookmark',
    url: '/advanced/Clients',
  },
  {
    title: 'Fournisseur',
    key: 'bootstrap',
    icon: 'fe fe-bookmark',
    url: '/advanced/fournisseur/fournisseur-list',
  },
  {
    title: 'Sous-traitant',
    key: 'bootstrap',
    icon: 'fe fe-bookmark',
    url: '/advanced/soustraitant',
  },

  //////////////Personnel///////////////////
  {
    category: true,
    title: 'Personnel',
  },
  {
    title: 'Employés',
    key: 'bootstrap',
    icon: 'fe fe-bookmark',
    url: '/advanced/employes/employes-list',
  },
 
  //////////////////////////////////////////////////////
  {
    category: true,
    title: 'Matérielles',
  },
  {
    title: 'Articles',
    key: 'bootstrap',
    icon: 'fe fe-bookmark',
    url: '/advanced/articles/articles-list',
  },
  {
    title: 'Catégories',
    key: 'bootstrap',
    icon: 'fe fe-bookmark',
    url: '/advanced/categories/category-list',
  },
  ///////////////////////Achat/////////////////////////
  {
    category: true,
    title: 'Achat',
  },
  
      {
        title: 'Passer une commande',
        key: 'formExamples',
        icon: 'fe fe-bookmark',
        url: '/advanced/materiels/materiels-list',
      },
      {
        title: 'Liste des Commandes',
        key: 'formExamples',
        icon: 'fe fe-bookmark',
        url: '/advanced/commandes/list-commande',
      },
   
  {
    title: 'Boite E-mail',
    key: 'pricingTables',
    icon: 'fe fe-bookmark',
    url: '/advanced/boite',
  },

  /*
  {
    title: 'Disabled Item',
    key: 'disabledItem',
    icon: 'fe fe-slash',
    disabled: true,
  },*/
]
