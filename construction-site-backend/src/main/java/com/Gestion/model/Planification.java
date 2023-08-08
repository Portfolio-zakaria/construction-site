package com.Gestion.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
@Entity
public class Planification implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_planing;
	 @Temporal(TemporalType.DATE)
     private Date date_start;
	 @Temporal(TemporalType.DATE)
	 private Date date_fin;
	 
	 @OneToOne
	 @JoinColumn(name="id_tache")
	 private Tache tache;
	 
	public Planification() {
		super();
	}
	public Long getId_planing() {
		return id_planing;
	}
	public void setId_planing(Long id_planing) {
		this.id_planing = id_planing;
	}
	public Date getDate_start() {
		return date_start;
	}
	public void setDate_start(Date date_start) {
		this.date_start = date_start;
	}
	public Date getDate_fin() {
		return date_fin;
	}
	public void setDate_fin(Date date_fin) {
		this.date_fin = date_fin;
	}

	public Tache getTache() {
		return tache;
	}
	public void setTache(Tache tache) {
		this.tache = tache;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	} 
	 
	 

}
