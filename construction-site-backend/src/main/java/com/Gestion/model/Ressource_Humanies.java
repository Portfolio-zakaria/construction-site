package com.Gestion.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "typePersonne")
public class Ressource_Humanies implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue
	private long id;
	private String nom;
	private String prenom;
	private String email;
	private String adress;
	private long tel;
	@Column(insertable=false,updatable=false)
	private String typePersonne;
	
	
	
	public Ressource_Humanies() {
		super();
	}


	public long getId() {
		return id;
	}


	public String getTypePersonne() {
		return typePersonne;
	}


	public void setTypePersonne(String typePersonne) {
		this.typePersonne = typePersonne;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getPrenom() {
		return prenom;
	}


	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getAdress() {
		return adress;
	}


	public void setAdress(String adress) {
		this.adress = adress;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public long getTel() {
		return tel;
	}


	public void setTel(long tel) {
		this.tel = tel;
	}


}
