package com.Gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Chef_chantier;



@CrossOrigin("*")
@RepositoryRestResource
public interface ChefChantierRepository extends JpaRepository<Chef_chantier, Long> {
	
	
	public Chef_chantier findByUsername(String username);

}
