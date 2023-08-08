package com.Gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Gestion.model.Ressource_Materielles;


@CrossOrigin("*")
@RepositoryRestResource
public interface RessourceMateriellesRepository extends JpaRepository<Ressource_Materielles, Long> {

}
