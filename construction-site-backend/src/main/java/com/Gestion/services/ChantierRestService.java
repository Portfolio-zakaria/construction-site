package com.Gestion.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Chantier;
import com.Gestion.model.Client;
import com.Gestion.model.Tache;
import com.Gestion.repositories.ChantierRepository;
import com.Gestion.repositories.ClientRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin("*")
@RestController
public class ChantierRestService {
	
	@Autowired 
	private ChantierRepository ChantierRepo;
	@Autowired 
	private ClientRepository ClientRepo;
	
	@PostMapping(path = "/chantiers/EnregistrerChantier")
	public void EnregistrerChantier(@RequestParam("chantier") String chantier,@RequestParam("idClient") String idClient,
									@RequestParam("adresse") String adresse,@RequestParam("adresse") String adresse1,
									@RequestParam("etat") String etat,@RequestParam("cp") String cp) throws Exception {

		Chantier ch = new ObjectMapper().readValue(chantier, Chantier.class);
		Long idClt = new ObjectMapper().readValue(idClient, Long.class);
		String _adresse = new ObjectMapper().readValue(adresse, String.class);
		String _adresse1 = new ObjectMapper().readValue(adresse1, String.class);
		String _etat = new ObjectMapper().readValue(etat, String.class);
		String _cp = new ObjectMapper().readValue(cp, String.class);
		Client clt = ClientRepo.findById(idClt).get();
		ch.setClient(clt);
		ch.setAdresse(_adresse+" " +_adresse1+" " +_etat+" " +_cp);
		ChantierRepo.save(ch);
		
	}
	
	
	@GetMapping(path = "/chantiers/fliter/{number}")
	public List<Object[]> getChantiers(@PathVariable int number){
		System.out.println(number);
		String motcle;
		if(number == 0) {
			return ChantierRepo.findByall();
		}else if(number ==1) {
			motcle="A l'étude";
			return ChantierRepo.findBystat(motcle);
		}else if(number ==2) {
			motcle="En cours";
			return ChantierRepo.findBystat(motcle);
		}else if(number ==3) {
			motcle="Achevé";
			return ChantierRepo.findBystat(motcle);
		}else {
			motcle="Litige";
			return ChantierRepo.findBystat(motcle);
		}
		
		
	}
	
	@GetMapping( "/chantiers/data" )
	public List<Object[]> getdatachantier(){
		 return ChantierRepo.getNombreByyear();
	}
	
	@GetMapping("/chantiers/data2/{id}")
	public List<Object[]> getNombreEmployeTacheParChantier(@PathVariable Long id){
		 return ChantierRepo.getNombreEmployeParTach(id);
	}
	
	@GetMapping("/chantiers/employe/vht/{id}")
	public List<Object[]> getEmployeVHT(@PathVariable Long id){
		 return ChantierRepo.getVhtEmploye(id);
	}
	
	@GetMapping("/chantiers/employe/vhtTotal/{id}")
	public List<Object[]> getEmployeVHTPalaning(@PathVariable Long id){
		 return ChantierRepo.getVhtEmployePlaning(id);
	}
	
	@GetMapping(value="/listeChantiers")
	public List<Chantier> getChantier(){
		return ChantierRepo.findAll();
	}
	
	@GetMapping(value = "/chantiers/vht")
	public List<Object[]>getChantierVht(){
		return ChantierRepo.getVhtChantier();
	}
	

}
