package com.Gestion.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class LigneCommande implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id_ligneCommande;
	private int qte_commander;
	@ManyToOne
	@JoinColumn(name="id_mat")
	private Materiel materiel;
	@ManyToOne
	@JoinColumn(name="id_commande")
	private Commande commande;

	public LigneCommande() {
		super();
	}

	public int getQte_commander() {
		return qte_commander;
	}

	public void setQte_commander(int qte_commander) {
		this.qte_commander = qte_commander;
	}

	public Long getId_ligneCommande() {
		return id_ligneCommande;
	}

	public void setId_ligneCommande(Long id_ligneCommande) {
		this.id_ligneCommande = id_ligneCommande;
	}

	public Materiel getMateriel() {
		return materiel;
	}

	public void setMateriel(Materiel materiel) {
		this.materiel = materiel;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}
	

}
