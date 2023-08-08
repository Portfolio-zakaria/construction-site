package com.Gestion.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;





@Entity
@DiscriminatorValue("employe")
public class Employe extends Ressource_Humanies implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Temporal(TemporalType.DATE)
	private Date dateengagement;
	private String profil;
	private double salaire;
	@OneToOne
	@JoinColumn(name="id")
	private Employe emp;
	@ManyToMany
	private List<Tache> taches;


	

	public Employe() {
		super();
	}


	public Date getDateengagement() {
		return dateengagement;
	}


	public void setDateengagement(Date dateengagement) {
		this.dateengagement = dateengagement;
	}


	public String getProfil() {
		return profil;
	}


	public void setProfil(String profil) {
		this.profil = profil;
	}


	public double getSalaire() {
		return salaire;
	}


	public void setSalaire(double salaire) {
		this.salaire = salaire;
	}


	public Employe getEmp() {
		return emp;
	}


	public void setEmp(Employe emp) {
		this.emp = emp;
	}


	


	public List<Tache> getTaches() {
		return taches;
	}


	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}


	


	public static long getSerialversionuid() {
		return serialVersionUID;
	}





}
