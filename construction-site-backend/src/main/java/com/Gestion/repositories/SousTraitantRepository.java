package com.Gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Sous_Traitant;



@CrossOrigin("*")
@RepositoryRestResource
public interface SousTraitantRepository extends JpaRepository<Sous_Traitant, Long> {

}