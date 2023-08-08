package com.Gestion.model;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Tache implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_tache;
	private String intitule;
	private int VH;
	
	@ManyToOne
	@JoinColumn(name="id_Chantier")
	private Chantier chantier;
	
	@ManyToMany(mappedBy="taches")
	private List<Employe> employes;
	
	 @OneToOne
	 @JoinColumn(name="id_planing")
	 @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	 private Planification planification;
	
	public Tache() {
		super();
	}
	public int getId_tache() {
		return id_tache;
	}

	public void setId_tache(int id_tache) {
		this.id_tache = id_tache;
	}

	public String getIntitule() {
		return intitule;
	}

	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}

	public int getVH() {
		return VH;
	}

	public Planification getPlanification() {
		return planification;
	}
	public void setPlanification(Planification planification) {
		this.planification = planification;
	}
	public void setVH(int vH) {
		VH = vH;
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
	public List<Employe> getEmployes() {
		return employes;
	}
	public void setEmployes(List<Employe> employes) {
		this.employes = employes;
	}
	
	
	
}
