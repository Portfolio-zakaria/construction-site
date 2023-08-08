package com.Gestion.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Category implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Long id_category;
	private String intitule;
	private String designation;
	@OneToMany(mappedBy="category",cascade  = CascadeType.REMOVE)
	private List<Materiel>materiels;
	

	public Category() {
		super();
	}


	public Long getId_category() {
		return id_category;
	}


	public void setId_category(Long id_category) {
		this.id_category = id_category;
	}




	public String getIntitule() {
		return intitule;
	}


	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}


	public List<Materiel> getMateriels() {
		return materiels;
	}


	public void setMateriels(List<Materiel> materiels) {
		this.materiels = materiels;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public List<Materiel> getArticles() {
		return materiels;
	}


	public void setArticles(List<Materiel> materiels) {
		this.materiels = materiels;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


}
