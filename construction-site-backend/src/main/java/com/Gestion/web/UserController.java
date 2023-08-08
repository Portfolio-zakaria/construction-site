package com.Gestion.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Gestion.model.Chef_chantier;
import com.Gestion.services.AccountService;


@RestController
public class UserController {
	
	@Autowired
	private AccountService accountService;
	@PostMapping("/register")
	public Chef_chantier register(@RequestBody UserForm userform){
		return	accountService.saveUser(userform.getUsername(), userform.getPassword(), userform.getConfirmedPassword());
	}
	
	

}
class UserForm{
	private String username;
	private String password;
	private String confirmedPassword;
	
	public UserForm() {
		super();
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmedPassword() {
		return confirmedPassword;
	}
	public void setConfirmedPassword(String confirmedPassword) {
		this.confirmedPassword = confirmedPassword;
	}
	
}
