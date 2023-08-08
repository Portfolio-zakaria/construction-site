package com.Gestion.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Commande implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Long id_commande;
	private String code;
	@Temporal(TemporalType.TIMESTAMP)
	private Date date_commande;
	private float total_payment;
	private String etat;
	@OneToOne
	private Chef_chantier chef_chantier;
	@OneToMany(mappedBy="commande",cascade  = CascadeType.REMOVE)
	private List<LigneCommande> ligneCommandes;
	@ManyToOne
	private Chantier chantier;
	@ManyToOne
	private Fournisseur fournisseur;
	@OneToOne
	private Facture facture;
	
	
	public Commande() {
		super();
	}


	public Chantier getChantier() {
		return chantier;
	}


	public void setChantier(Chantier chantier) {
		this.chantier = chantier;
	}


	public Long getId_commande() {
		return id_commande;
	}


	public void setId_commande(Long id_commande) {
		this.id_commande = id_commande;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public Date getDate_commande() {
		return date_commande;
	}


	public void setDate_commande(Date date_commande) {
		this.date_commande = date_commande;
	}





	public Chef_chantier getChef_chantier() {
		return chef_chantier;
	}


	public void setChef_chantier(Chef_chantier chef_chantier) {
		this.chef_chantier = chef_chantier;
	}


	public List<LigneCommande> getLigneCommandes() {
		return ligneCommandes;
	}


	public void setLigneCommandes(List<LigneCommande> ligneCommandes) {
		this.ligneCommandes = ligneCommandes;
	}


	public Fournisseur getFournisseur() {
		return fournisseur;
	}


	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}


	public Facture getFacture() {
		return facture;
	}


	public void setFacture(Facture facture) {
		this.facture = facture;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public float getTotal_payment() {
		return total_payment;
	}


	public void setTotal_payment(float total_payment) {
		this.total_payment = total_payment;
	}


	public String getEtat() {
		return etat;
	}


	public void setEtat(String etat) {
		this.etat = etat;
	}


	
	
	

}
