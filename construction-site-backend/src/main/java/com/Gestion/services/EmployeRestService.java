package com.Gestion.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Employe;
import com.Gestion.model.Materiel;
import com.Gestion.model.Tache;
import com.Gestion.repositories.EmployeRepository;
import com.Gestion.repositories.TacheRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin("*")
public class EmployeRestService {
	@Autowired
	private EmployeRepository empRep;
	@Autowired
	private TacheRepository tacheRepo;
	
	
	@PostMapping(path = "employes/Affectation")
	public void AffecterEmpTache(@RequestParam("ListeIdsEmp") String[] ListIdsEmp,@RequestParam("idtache") String idtache ) throws Exception {
        
		String idTache = new ObjectMapper().readValue(idtache, String.class);
		System.out.println("--------------------- :" + Integer.parseInt(idTache) );
		Tache t = tacheRepo.findById(Integer.parseInt(idTache)).get();
	
	
		for(int i = 0 ; i<ListIdsEmp.length;i++) {
		   if (ListIdsEmp.length == 1 ){
			    long index = Long.parseLong(ListIdsEmp[i].substring(1,ListIdsEmp[i].length()-1));
				Employe emp = empRep.findById(index).get();
				t.getEmployes().add(emp);
				emp.getTaches().add(t);
				empRep.save(emp);
		   }else{			   
				if(i == 0 ) {
					 long index = Long.parseLong(ListIdsEmp[i].substring(1, ListIdsEmp[i].length()));
					 Employe emp = empRep.findById(index).get();
					 t.getEmployes().add(emp);
					 emp.getTaches().add(t);
					 empRep.save(emp);
				}else if (i == (ListIdsEmp.length -1)){
					 long index = Long.parseLong(ListIdsEmp[i].substring(0, ListIdsEmp[i].length()-1));
					 Employe emp = empRep.findById(index).get();
					 t.getEmployes().add(emp);
					 emp.getTaches().add(t);
					 empRep.save(emp);
				}else{
					 long index = Long.parseLong(ListIdsEmp[i]);
					 Employe emp = empRep.findById(index).get();
					 t.getEmployes().add(emp);
					 emp.getTaches().add(t);
					 empRep.save(emp);
				}
			   
		   }
          }
		             tacheRepo.save(t);
		 }
      
	
}
