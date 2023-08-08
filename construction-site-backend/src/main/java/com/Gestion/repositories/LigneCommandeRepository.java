package com.Gestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.LigneCommande;



@CrossOrigin("*")
@RepositoryRestResource
public interface LigneCommandeRepository extends JpaRepository<LigneCommande, Long> {
	

}
