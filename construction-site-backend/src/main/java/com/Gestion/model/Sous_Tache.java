package com.Gestion.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Sous_Tache implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id_Sous_Tache;
	private String intitule;
	public Sous_Tache() {
		super();
	}
	public Long getId_Sous_Tache() {
		return id_Sous_Tache;
	}
	public void setId_Sous_Tache(Long id_Sous_Tache) {
		this.id_Sous_Tache = id_Sous_Tache;
	}
	public String getIntitule() {
		return intitule;
	}
	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
	
}
