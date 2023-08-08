package com.Gestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Commande;




@CrossOrigin("*")
@RepositoryRestResource
public interface CommandeRepository extends JpaRepository<Commande, Long> {
	
    @Query(nativeQuery = true , value="select m.id_mat, m.ref , m.nom , m.prix_unitair , l.qte_commander, ca.intitule as name from Commande c, Materiel m , Ligne_commande l , Category ca where c.id_commande=l.id_commande and l.id_mat = m.id_mat and m.category_id_category=ca.id_category and c.id_commande=?1 ")
	public List<Object>findAllArticleCommande(Long id);
    
    @Query(nativeQuery = true , value="select  m.nom ,  l.qte_commander from Chantier ch, Commande c, Materiel m , Ligne_commande l  where c.id_commande=l.id_commande and l.id_mat = m.id_mat and c.chantier_id_chantier=ch.id_chantier and ch.id_chantier=?1 ")
  	public List<Object>findAllArticleChantier(Long id);


	@Query("select c from Commande c where c.id_commande =?1") 
	public Commande findByIdone(Long id);
}
