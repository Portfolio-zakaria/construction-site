package com.Gestion.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
public class Chantier implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_Chantier;

	private String adresse;

	private String intitule;

	private String statut;

	private String ville;
	 @Temporal(TemporalType.DATE)
	private Date date_creation;

	//bi-directional many-to-one association to Client
	@ManyToOne
	@JoinColumn(name="Id_Clt")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Client client;
	
	@ManyToOne
	private Chef_chantier chef_chantier;
	
	@OneToMany(mappedBy = "chantier")
	//JsonProperty(access = JsonProperty.Access.WRITE_ONLY)//
	//@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private List<Tache> taches;
	
	@OneToMany(mappedBy = "chantier")
	private List<Ressource_Materielles> resource_mat;
	
	
	public Chantier() {
		this.date_creation=new Date();
	}

	public Chantier(String intitule) {
		super();
		this.intitule = intitule;
	}

	public int getId_Chantier() {
		return this.id_Chantier;
	}

	public void setId_Chantier(int id_Chantier) {
		this.id_Chantier = id_Chantier;
	}

	public String getAdresse() {
		return this.adresse;
	}

	public Date getDate_creation() {
		return date_creation;
	}

	public void setDate_creation(Date date_creation) {
		this.date_creation = date_creation;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public List<Tache> getTaches() {
		return taches;
	}

	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}

	public String getIntitule() {
		return this.intitule;
	}

	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}

	public String getStatut() {
		return this.statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public String getVille() {
		return this.ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public Client getClient() {
		return this.client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Chef_chantier getChef_chantier() {
		return chef_chantier;
	}

	public void setChef_chantier(Chef_chantier chef_chantier) {
		this.chef_chantier = chef_chantier;
	}

	public List<Ressource_Materielles> getResource_mat() {
		return resource_mat;
	}

	public void setResource_mat(List<Ressource_Materielles> resource_mat) {
		this.resource_mat = resource_mat;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Chantier [id_Chantier=" + id_Chantier + ", intitule=" + intitule + ", client=" + client + "]";
	}

}