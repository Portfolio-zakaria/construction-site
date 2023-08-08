package com.Gestion.sec;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Gestion.model.Chef_chantier;
import com.Gestion.services.AccountService;


@Service
public class UserDetailsSeriviceImpl implements UserDetailsService{
	@Autowired
	private AccountService accountservice;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Chef_chantier appuser = accountservice.loadUserByUsername(username);
		if(appuser==null) throw new UsernameNotFoundException("invalide user");
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		appuser.getRoles().forEach(r->{
			authorities.add(new SimpleGrantedAuthority(r.getRoleName()));
		});
		return new User(appuser.getUsername(),appuser.getPassword(),authorities);
	}

}
