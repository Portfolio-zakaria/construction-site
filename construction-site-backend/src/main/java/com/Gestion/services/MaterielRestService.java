package com.Gestion.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Category;
import com.Gestion.model.Materiel;
import com.Gestion.repositories.CategoryRepository;
import com.Gestion.repositories.MaterielRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
@CrossOrigin("*")
@RestController
public class MaterielRestService {
	@Autowired
	private MaterielRepository materielRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	


	
	@PostMapping(path = "/materiels/add")
	public void addArticle(@RequestParam("materiels") String materiels,@RequestParam("category") String id_cat) throws Exception {
		
		Materiel a = new ObjectMapper().readValue(materiels, Materiel.class);
		Long idcat = new ObjectMapper().readValue(id_cat, Long.class);
		
		Category c = categoryRepository.findByIdone(idcat);
		a.setCategory(c);
		a.setPrix_ttc(a.getPrix_unitair()+a.getPrix_unitair()*a.getTaux_tva());
		materielRepository.save(a);
		System.out.println("Article added");
	}
	
	@GetMapping(path="/materiels/all")
	public List<Object[]>getAllMatCat(){
		return materielRepository.findAllArticleCatergory();
	}
	@PutMapping(path = "/materiels/edite")
	public void editeArticle(@RequestParam("article") String materiels,@RequestParam("category") String id_cat,@RequestParam("id")String id ) throws Exception {
		
		Materiel a = new ObjectMapper().readValue(materiels, Materiel.class);
		Long idcat = new ObjectMapper().readValue(id_cat, Long.class);
		Long IdMat = new ObjectMapper().readValue(id, Long.class);
		Materiel a1 = materielRepository.findById(IdMat).get();
	    a1.setRef(a.getRef());
	    a1.setNom(a.getNom());
	    a1.setDesignation(a.getDesignation());
	    a1.setPrix_unitair(a.getPrix_unitair());
	    a1.setTaux_tva(a.getTaux_tva());
	    a1.setPrix_ttc(a.getPrix_unitair()+a.getTaux_tva());
		Category c = categoryRepository.findByIdone(idcat);
		a1.setCategory(c);	
		materielRepository.save(a1);
		System.out.println("Article updated");
		
	}
	
	
}
