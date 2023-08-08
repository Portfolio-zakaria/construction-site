package com.Gestion.sec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userdetails;
	@Autowired
	private BCryptPasswordEncoder bcrpe;
	 
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userdetails).passwordEncoder(bcrpe);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		//pour authentification base sur la sessions
		//http.formLogin();
		
		//on utiliser authetification baser sur json web token
		http.csrf().disable(); 
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		///specifier les route authorized
		//http.authorizeRequests().antMatchers("/collaborateurs/**","/projets/**","/missions/**","/chefprojets/**","/gestionnaireprojets/**").permitAll();
		http.authorizeRequests().antMatchers("/login/**").permitAll();
		http.authorizeRequests().antMatchers("/chef_chantiers/**","/appRoles/**","/chantiers/**","/planifications/**","/employes/**","/taches/**","/ressource_materielles/**","/planification/**","/commandes/**","/fournisseurs/**","/categories/**","/materiels/**").hasAuthority("USER");
		http.authorizeRequests().anyRequest().authenticated();
		http.addFilter(new JWTAuthentificationFilter(authenticationManager()));
		// filter pour aficher les taches par exemple 
		http.addFilterBefore(new JWTAuthorization(), UsernamePasswordAuthenticationFilter.class);
	}

}
