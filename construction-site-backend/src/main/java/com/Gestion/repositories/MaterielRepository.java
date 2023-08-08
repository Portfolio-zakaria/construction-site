package com.Gestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Materiel;


@CrossOrigin("*")
@RepositoryRestResource
public interface MaterielRepository extends JpaRepository<Materiel, Long> {

	@Query("select m from Materiel m where m.id_mat =:n") 
	public Materiel findByIdone(@Param("n")Long n);
	@Query(nativeQuery = true , value = "select m.id_mat,m.ref,m.nom,m.designation,m.prix_unitair,m.taux_tva,m.prix_ttc,c.intitule from Materiel m,Category c where m.category_id_category=c.id_category") 
	public List<Object[]> findAllArticleCatergory();
}
