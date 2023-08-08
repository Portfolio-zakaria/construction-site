package com.Gestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Fournisseur;




@CrossOrigin("*")
@RepositoryRestResource
public interface FournisseurRepository extends JpaRepository<Fournisseur, Long>{
	
	@Query("select f from Fournisseur f where f.id_fournisseur =:n") 
	public Fournisseur findByIdone(@Param("n")Long n);

}
