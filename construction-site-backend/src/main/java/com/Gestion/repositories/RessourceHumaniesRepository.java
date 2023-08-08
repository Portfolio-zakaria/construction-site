package com.Gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Ressource_Humanies;


@CrossOrigin("*")
@RepositoryRestResource
public interface RessourceHumaniesRepository extends JpaRepository<Ressource_Humanies, Long> {

}
