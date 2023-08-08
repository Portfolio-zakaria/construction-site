package com.Gestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Chantier;

@CrossOrigin("*")
@RepositoryRestResource
public interface ChantierRepository extends JpaRepository<Chantier, Integer> {
   
	@Query("select c from Chantier c where c.id_Chantier =:n") 
	public Chantier findByIdone(@Param("n")Integer n);
	
	@Query(nativeQuery = true , value = "select c.id_Chantier,c.intitule,c.statut,c.adresse,c.ville from Chantier c where c.statut =?1") 
	public List<Object[]> findBystat(String motCle);
	@Query(nativeQuery = true , value = "select c.id_Chantier,c.intitule,c.statut,c.adresse,c.ville from Chantier c ") 
	public List<Object[]> findByall();
	
	public List<Chantier>findByStatut(String motCle);
	
	@Query(nativeQuery = true ,value="select year(c.date_creation) as year, count(id_Chantier) as nombre from Chantier c Group by year") 
	public List<Object[]> getNombreByyear();
	
	
	@Query(nativeQuery = true ,value="select t.intitule, count(e.id) as nombreEmploye from Chantier c,Tache t,Employe e , employe_taches et where c.id_Chantier=t.id_chantier and c.id_chantier =:n and t.id_tache=et.taches_id_tache and e.id=et.employes_id Group by t.intitule") 
	public List<Object[]> getNombreEmployeParTach(@Param("n")Long n);
	
	@Query(nativeQuery = true ,value="select c.intitule, sum(t.vh) as ChantierVHT from Chantier c,Tache t where c.id_Chantier=t.id_chantier GROUP BY c.intitule") 
	public List<Object[]> getVhtChantier();
	
	@Query(nativeQuery = true ,value="select e.nom,e.prenom, sum(t.vh) as vhEmploye from Chantier c,Tache t,ressource_humanies e , employe_taches et where c.id_Chantier=t.id_chantier and c.id_chantier =:n and t.id_tache=et.taches_id_tache and e.id=et.employes_id Group by e.nom") 
	public List<Object[]> getVhtEmploye(long n);
	
	
	@Query(nativeQuery = true ,value="select e.id,e.nom,e.prenom, sum(t.vh) as vhEmploye,ee.profil from Chantier c,Tache t,ressource_humanies e,Employe ee , employe_taches et where c.id_Chantier=t.id_chantier and c.id_chantier =:n and t.id_tache=et.taches_id_tache and e.id=et.employes_id and ee.id=e.id Group by e.nom") 
	public List<Object[]> getVhtEmployePlaning(long n);
}
