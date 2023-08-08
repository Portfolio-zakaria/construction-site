package com.Gestion.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Chantier;
import com.Gestion.model.Planification;
import com.Gestion.model.Tache;
import com.Gestion.repositories.ChantierRepository;
import com.Gestion.repositories.PlanificationRepository;
import com.Gestion.repositories.TacheRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin("*")
@RestController
public class PlanificationRestService {
	
	@Autowired
	private PlanificationRepository PlanRepo;
	
	@Autowired
	private TacheRepository TacheRep;
	
	
	@PostMapping(path = "/planifications/EnregistrerPlan")
	public void EnregistrerPlan(@RequestParam("plan") String plan,@RequestParam("idtache") String idtache) throws Exception {
		Planification p  = new ObjectMapper().readValue(plan, Planification.class);
		Integer idTache = new ObjectMapper().readValue(idtache, Integer.class);
		Tache t = TacheRep.findById(idTache).get();
		p.setTache(t);
		t.setPlanification(p);
		PlanRepo.save(p);
		
		
	}
	
	
	

}
