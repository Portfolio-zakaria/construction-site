package com.Gestion.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
@Entity
public class Materiel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private long id_mat;
	private String ref;
	private String nom;
	private String designation;
	private double prix_unitair;
	private double taux_tva;
	private double prix_ttc;
	@ManyToOne
	private Category category;
	
	@OneToMany(mappedBy="materiel")
	private List<LigneCommande> ligneCommande;
	
	public Materiel() {
		super();
	}
	
	public long getId_mat() {
		return id_mat;
	}

	public void setId_mat(long id_mat) {
		this.id_mat = id_mat;
	}

	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public double getPrix_unitair() {
		return prix_unitair;
	}
	public void setPrix_unitair(double prix_unitair) {
		this.prix_unitair = prix_unitair;
	}
	public double getTaux_tva() {
		return taux_tva;
	}
	public void setTaux_tva(double taux_tva) {
		this.taux_tva = taux_tva;
	}
	public double getPrix_ttc() {
		return prix_ttc;
	}
	public void setPrix_ttc(double prix_ttc) {
		this.prix_ttc = prix_ttc;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<LigneCommande> getLigneCommande() {
		return ligneCommande;
	}
	public void setLigneCommande(List<LigneCommande> ligneCommande) {
		this.ligneCommande = ligneCommande;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	
	
	

	
	

}
