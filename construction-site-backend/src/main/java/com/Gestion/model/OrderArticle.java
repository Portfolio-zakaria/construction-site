package com.Gestion.model;

public class OrderArticle {
	private Long id_mat;
	private String ref;
	private String nom;
	private double prix_unitair;
	private int qte;
	public Long getId_mat() {
		return id_mat;
	}
	public void setId_mat(Long id_mat) {
		this.id_mat = id_mat;
	}
	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public double getPrix_unitair() {
		return prix_unitair;
	}
	public void setPrix_unitair(double prix_unitair) {
		this.prix_unitair = prix_unitair;
	}
	public int getQte() {
		return qte;
	}
	public void setQte(int qte) {
		this.qte = qte;
	}

}
