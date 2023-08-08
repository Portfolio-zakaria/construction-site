package com.Gestion.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.plugin.core.OrderAwarePluginRegistry;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Chantier;
import com.Gestion.model.Chef_chantier;
import com.Gestion.model.Commande;
import com.Gestion.model.Fournisseur;
import com.Gestion.model.LigneCommande;
import com.Gestion.model.Materiel;
import com.Gestion.model.OrderArticle;
import com.Gestion.repositories.ChantierRepository;
import com.Gestion.repositories.ChefChantierRepository;
import com.Gestion.repositories.CommandeRepository;
import com.Gestion.repositories.FactureRepository;
import com.Gestion.repositories.FournisseurRepository;
import com.Gestion.repositories.LigneCommandeRepository;
import com.Gestion.repositories.MaterielRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin("*")
@RestController
public class CommandeRestService {
	@Autowired
	private CommandeRepository cmdRep;
	
	@Autowired
	private MaterielRepository matRep;
	
	@Autowired
	private LigneCommandeRepository lignCmdRep;
	
	@Autowired
	private ChantierRepository chanRep;
	
	@Autowired
	private FournisseurRepository fournRep;
	
	@Autowired
	private FactureRepository factRep;
	
	@Autowired
	private ChefChantierRepository chefChanRep;
	
	
	@PostMapping(path = "/order")
	public void saveCommande(@RequestParam("user") String username,@RequestParam("chantier") String id_chan,@RequestParam("fournisseur") String id_fourni ,@RequestParam("commande") String comma) throws Exception, IOException {
		
		
		OrderArticle[] a =new  ObjectMapper().readValue(comma,OrderArticle[].class);
		
		String user_name = new ObjectMapper().readValue(username, String.class);
		Chef_chantier chef =chefChanRep.findByUsername(user_name);
		System.out.println(user_name);
		
		Long id_fournisseur = new ObjectMapper().readValue(id_fourni, Long.class);
		Fournisseur four=fournRep.findByIdone(id_fournisseur);
		System.out.println("id de four :"+id_fournisseur);
		
		Integer id_chantier =new ObjectMapper().readValue(id_chan, Integer.class);
		Chantier ch=chanRep.findById(id_chantier).get();
		System.out.println("id de chan :"+id_chantier);
		
		
		Commande cmd =new Commande();
		cmd.setChantier(ch);
		cmd.setDate_commande(new Date());
		cmd.setFournisseur(four);
		cmd.setChef_chantier(chef);
		cmd.setEtat("En Attente");
		cmd.setCode("CF0000-"+ch.getId_Chantier() + ((int)Math.floor(1000 + Math.random() * 9000)));
		cmd =cmdRep.save(cmd);
		
		float total=0;
		for (OrderArticle b : a) {
			LigneCommande lcmd =new LigneCommande();
			lcmd.setCommande(cmd);
			Materiel art =matRep.findByIdone(b.getId_mat());
			lcmd.setMateriel(art);
			lcmd.setQte_commander(b.getQte());
			lignCmdRep.save(lcmd);
			total+=b.getQte()*art.getPrix_unitair();
		}
		cmd.setTotal_payment(total);
		cmdRep.save(cmd);
	}
	
	@GetMapping(path = "/order/{id}")
	public  List<Object> getCommandesArt(@PathVariable Long id){ 
			return cmdRep.findAllArticleCommande(id);
	}
	
	@PutMapping(path = "/commandes/{id}")
	public void editeEtat(@PathVariable Long id,@RequestBody String etat) {
		Commande c =cmdRep.findByIdone(id);
		c.setEtat(etat);
		c.setId_commande(id);
		cmdRep.save(c);
	}
	
	@GetMapping(path = "/chantiers/all/{id}")
	public List<Object> getAllArticleChantier(@PathVariable Long id){
		System.out.println("chnatier id :"+id);
		return cmdRep.findAllArticleChantier(id);
	}
}
