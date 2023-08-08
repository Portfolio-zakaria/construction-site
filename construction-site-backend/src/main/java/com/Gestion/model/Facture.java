package com.Gestion.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Facture implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue
	private Long id_facture;
	
	@OneToOne
	@JoinColumn(name="id_commande")
	private Commande commande;

	public Facture() {
		super();
	}

	public Long getId_facture() {
		return id_facture;
	}

	public void setId_facture(Long id_facture) {
		this.id_facture = id_facture;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
