package com.Gestion.services;

import com.Gestion.model.AppRole;
import com.Gestion.model.Chef_chantier;

public interface AccountService {
	public Chef_chantier saveUser(String username, String password , String passwordConfirme);
	public AppRole  save(AppRole role);
	public Chef_chantier loadUserByUsername(String username);
	public void addRoleToUser(String username , String rolename);
}
