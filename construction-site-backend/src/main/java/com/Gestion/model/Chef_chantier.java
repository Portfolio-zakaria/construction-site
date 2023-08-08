package com.Gestion.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


@Entity
@DiscriminatorValue("chef_chantier")
public class Chef_chantier extends Ressource_Humanies implements Serializable{

	private static final long serialVersionUID = 1L;
	
	
	@OneToOne
	@JoinColumn(name="id_Chef_chantier")
	private Chef_chantier chef_chantier;
	@Column(unique=true)
	private String username;
	private String password;

	
	@OneToMany(mappedBy="chef_chantier")
	private  List<Chantier> chantiers;
	
	@ManyToMany(fetch = FetchType.EAGER)
	private List<AppRole> roles = new ArrayList<AppRole>();
	
	
	public Chef_chantier() {
		super();
	}

	public Chef_chantier getChef_chantier() {
		return chef_chantier;
	}

	public void setChef_chantier(Chef_chantier chef_chantier) {
		this.chef_chantier = chef_chantier;
	}

	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public List<Chantier> getChantiers() {
		return chantiers;
	}

	public void setChantiers(List<Chantier> chantiers) {
		this.chantiers = chantiers;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public List<AppRole> getRoles() {
		return roles;
	}

	public void setRoles(List<AppRole> roles) {
		this.roles = roles;
	}


	

	
	
	

}
