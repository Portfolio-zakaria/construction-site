package com.Gestion.services;

import org.springframework.transaction.annotation.Transactional;

import com.Gestion.model.AppRole;
import com.Gestion.model.Chef_chantier;
import com.Gestion.repositories.AppRoleRepository;
import com.Gestion.repositories.ChefChantierRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class AccountServiceImpl implements AccountService{
	@Autowired
	private ChefChantierRepository appuserRep;
	@Autowired
	private AppRoleRepository approleRep;
	@Autowired
	private BCryptPasswordEncoder bcrPassword;
	@Override
	public Chef_chantier saveUser(String username, String password, String passwordConfirme) {
		Chef_chantier user = appuserRep.findByUsername(username);
		if(user!=null) throw new RuntimeException("user already existe");
		if(!password.equals(passwordConfirme))throw new RuntimeException("please confirm your password");
		Chef_chantier appuser=new Chef_chantier();
		appuser.setUsername(username);
		appuser.setPassword(bcrPassword.encode(password));
		appuserRep.save(appuser);
		addRoleToUser(username, "USER");
		return appuser;
	}

	@Override
	public AppRole save(AppRole role) {
		
		return approleRep.save(role);
	}

	@Override
	public Chef_chantier loadUserByUsername(String username) {
		
		return appuserRep.findByUsername(username);
	}

	@Override
	public void addRoleToUser(String username, String rolename) {
		Chef_chantier appuser = appuserRep.findByUsername(username);
		AppRole approle = approleRep.findByRoleName(rolename);
		appuser.getRoles().add(approle);
		
		
	}

}
