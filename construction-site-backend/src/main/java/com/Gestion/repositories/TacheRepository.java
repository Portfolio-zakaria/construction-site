package com.Gestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Planification;
import com.Gestion.model.Tache;

@CrossOrigin("*")
@RepositoryRestResource
public interface TacheRepository  extends JpaRepository< Tache, Integer>{
	
	@Query("select t from Tache t where t.id_tache =:n") 
	public Tache findByIdone(@Param("n")Long n);
	
	@Query("select t from Tache t where id_Chantier=:n and id_planing IS NOT NULL") 
	public List<Tache> getTachesP(@Param("n")Integer n);
	
}
