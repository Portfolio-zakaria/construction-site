package com.Gestion.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


@Entity
public class Client implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_Clt;

	private String adresse;

	private String email;

	private String nom;

	private String prenom;

	private String statuCivilite;

	private String tel;

	private String type;

	private String typeTier;
	private String suiteAdress;
	private String cp;
	private String etat;
	

	private String ville;

	//bi-directional many-to-one association to Chantier
	@OneToMany(mappedBy="client")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private List<Chantier> chantiers;
	
	

	public Client() {
		
	}
   

	public Client(String nom, String prenom) {
		super();
		this.nom = nom;
		this.prenom = prenom;
	}


	public Client(String adresse, String email, String nom, String prenom, String statuCivilite, String tel,
			String type, String typeTier, String ville) {
		super();
		this.adresse = adresse;
		this.email = email;
		this.nom = nom;
		this.prenom = prenom;
		this.statuCivilite = statuCivilite;
		this.tel = tel;
		this.type = type;
		this.typeTier = typeTier;
		this.ville = ville;

	}


	public Long getId_Clt() {
		return this.id_Clt;
	}

	public void setId_Clt(Long id_Clt) {
		this.id_Clt = id_Clt;
	}

	public String getAdresse() {
		return this.adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name = "nom")
	public String getNom() {
		return this.nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return this.prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	
	public String getSuiteAdress() {
		return suiteAdress;
	}


	public void setSuiteAdress(String suiteAdress) {
		this.suiteAdress = suiteAdress;
	}


	public String getCp() {
		return cp;
	}


	public void setCp(String cp) {
		this.cp = cp;
	}


	public String getEtat() {
		return etat;
	}


	public void setEtat(String etat) {
		this.etat = etat;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public String getStatuCivilite() {
		return this.statuCivilite;
	}

	public void setStatuCivilite(String statuCivilite) {
		this.statuCivilite = statuCivilite;
	}

	public String getTel() {
		return this.tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeTier() {
		return this.typeTier;
	}

	public void setTypeTier(String typeTier) {
		this.typeTier = typeTier;
	}

	public String getVille() {
		return this.ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public List<Chantier> getChantiers() {
		return this.chantiers;
	}

	public void setChantiers(List<Chantier> chantiers) {
		this.chantiers = chantiers;
	}

	public Chantier addChantier(Chantier chantier) {
		getChantiers().add(chantier);
		chantier.setClient(this);

		return chantier;
	}

	public Chantier removeChantier(Chantier chantier) {
		getChantiers().remove(chantier);
		chantier.setClient(null);

		return chantier;
	}

}