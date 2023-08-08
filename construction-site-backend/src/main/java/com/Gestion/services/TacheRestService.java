package com.Gestion.services;


import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Chantier;
import com.Gestion.model.Tache;
import com.Gestion.repositories.ChantierRepository;
import com.Gestion.repositories.TacheRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin("*")
@RestController
public class TacheRestService {
	
	@Autowired
	private TacheRepository tacheRep;
	@Autowired
	private ChantierRepository chantierRep;
	
	@PostMapping(path = "/taches/EnregistrerTache")
	public void EnregistrerTache(@RequestParam("tache") String tache,@RequestParam("idChantier") String idChantier) throws Exception {
		Tache t = new ObjectMapper().readValue(tache, Tache.class);
		Integer idCh = new ObjectMapper().readValue(idChantier, Integer.class);
		Chantier ch = chantierRep.findById(idCh).get();
		t.setChantier(ch);
		tacheRep.save(t);
		
	}
	
	@PostMapping(path = "/taches/TachesPlanifiee")
	public List<Tache> getTachesPlanifiee(@RequestParam("idChantier") String idChantier) throws Exception {
		Integer idCh = new ObjectMapper().readValue(idChantier, Integer.class);
		System.out.println("------------------------------------------------------------->" + idCh);
		List<Tache> ListTaches = tacheRep.getTachesP(idCh);
		return ListTaches;
		
	}
	

}
