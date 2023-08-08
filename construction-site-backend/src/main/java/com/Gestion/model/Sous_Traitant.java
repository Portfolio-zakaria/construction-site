package com.Gestion.model;

import java.io.Serializable;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@DiscriminatorValue("sous_traitant")
public class Sous_Traitant extends Ressource_Humanies implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@OneToOne
	@JoinColumn(name="id")
	private Sous_Traitant sous_traitant;
	private String specialite;
	private String statut;
	public Sous_Traitant getSous_traitant() {
		return sous_traitant;
	}
	public void setSous_traitant(Sous_Traitant sous_traitant) {
		this.sous_traitant = sous_traitant;
	}
    
	public String getSpecialite() {
		return specialite;
	}
	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Sous_Traitant() {
		super();
	}
	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}
	
	
	

}
