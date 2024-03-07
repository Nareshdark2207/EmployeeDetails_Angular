package com.example.empdata.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties.Group;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.empdata.model.loginData;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserService userService;
	
	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		loginData userDetails = userService.fetchUserByUserId(userId);
		if (userDetails!=null) {
			UserDetails user = User.withUsername(userDetails.getUserId())
	                .password(userDetails.getPassword())
	                .authorities(getAuthorities(userDetails)).build();
			return user;
		} else {
			throw new UsernameNotFoundException("User not found with userId: " + userId);
		}

	}
	
	 private Collection<GrantedAuthority> getAuthorities(loginData user){
	       
	        Collection<GrantedAuthority> authorities = new ArrayList<>();
	        System.out.println(user.getRole());
	        authorities.add(new SimpleGrantedAuthority(user.getRole().toUpperCase()));
	        

	        return authorities;
	    }

}
