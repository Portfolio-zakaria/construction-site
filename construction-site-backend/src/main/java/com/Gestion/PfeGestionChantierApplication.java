package com.Gestion;

import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.Gestion.model.AppRole;
import com.Gestion.model.Category;
import com.Gestion.model.Chantier;
import com.Gestion.model.Chef_chantier;
import com.Gestion.model.Client;
import com.Gestion.model.Commande;
import com.Gestion.model.Employe;
import com.Gestion.model.Fournisseur;
import com.Gestion.model.LigneCommande;
import com.Gestion.model.Materiel;
import com.Gestion.model.Planification;
import com.Gestion.model.Sous_Traitant;
import com.Gestion.model.Tache;
import com.Gestion.repositories.AppRoleRepository;
import com.Gestion.repositories.ChantierRepository;
import com.Gestion.repositories.ClientRepository;
import com.Gestion.repositories.EmployeRepository;
import com.Gestion.repositories.PlanificationRepository;
import com.Gestion.repositories.TacheRepository;
import com.Gestion.services.AccountService;

@SpringBootApplication
public class PfeGestionChantierApplication implements CommandLineRunner {
     
	@Autowired
	private ClientRepository clientRep;
	@Autowired
	private ChantierRepository chantierRep; 
	@Autowired
	private TacheRepository tacheRep; 
	@Autowired
	private PlanificationRepository planRep; 
	@Autowired
	private EmployeRepository empRep; 
	
	@Autowired
	private AppRoleRepository approleRep;
	@Autowired
	private AccountService accountService;

	
	@Autowired
	private RepositoryRestConfiguration repRestConfig;
	public static void main(String[] args) {
		SpringApplication.run(PfeGestionChantierApplication.class, args);
	}
	//resolve problem de encrepted password
		@Bean
		BCryptPasswordEncoder getBCPE() {
			return new BCryptPasswordEncoder();
		}
	@Override
	public void run(String... args) throws Exception {
		repRestConfig.exposeIdsFor(Client.class,Chantier.class,Tache.class,Planification.class,Employe.class,Fournisseur.class, 
				Sous_Traitant.class,Category.class,Materiel.class,Commande.class,LigneCommande.class);
		
		/*chantierRep.save(new Chantier("intitule1"));
		chantierRep.save(new Chantier("intitule2"));
		chantierRep.save(new Chantier("intitule3"));*/
		/*clientRep.save(new Client("Alami","mohamed"));
		clientRep.save(new Client("Alami1","mohamed1"));
		clientRep.save(new Client("Alami2","mohamed2"));*/
		
		/*chantierRep.findByStatut("En cours").forEach(a->{
			System.out.println(a.getIntitule());
		});
		*/
		// mali dir lih raun commenter hadchi liltaht kamil 
		/*Chef_chantier chef=new Chef_chantier();
		AppRole appprole = new AppRole();
		appprole.setRoleName("USER");
		accountService.save(appprole);
		/*Stream.of("Chef1","user2","user3","admin").forEach(un->{
			accountService.saveUser(un, "1234", "1234");
		});*/
		/*accountService.saveUser("user1", "1234", "1234");*/
		System.out.println("-------------Yeeeeeep ............it 's working-------------");
	}

}
