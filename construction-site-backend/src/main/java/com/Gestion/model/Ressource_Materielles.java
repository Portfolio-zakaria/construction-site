package com.Gestion.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Ressource_Materielles implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Long id_mat;
	private String intitule_mat;
	private String  description_mat;
	
	@ManyToOne
	private Chantier chantier;

	public Ressource_Materielles() {
		super();
	}

	public Long getId_mat() {
		return id_mat;
	}

	public void setId_mat(Long id_mat) {
		this.id_mat = id_mat;
	}

	public String getIntitule_mat() {
		return intitule_mat;
	}

	public void setIntitule_mat(String intitule_mat) {
		this.intitule_mat = intitule_mat;
	}

	public String getDescription_mat() {
		return description_mat;
	}

	public void setDescription_mat(String description_mat) {
		this.description_mat = description_mat;
	}

	public Chantier getChantier() {
		return chantier;
	}

	public void setChantier(Chantier chantier) {
		this.chantier = chantier;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
