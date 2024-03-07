package com.example.empdata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.empdata.model.loginData;
import com.example.empdata.service.UserService;


@SuppressWarnings("unused")
@RestController
public class DefaultController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/home")
	public String home() {
		
	    return "/home";
	}	

	@GetMapping("/login")
	public String login() {
	    return "/login";
	}	
	
	@PostMapping("/checkLoggedInUser")
	public loginData checkLoggedInUser(@RequestParam("userId")String userId) {
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		if(userName.equals(userId)) {
			return userService.fetchUserByUserId(userId);
		} else {
			throw new UsernameNotFoundException("User not found with userId: " + userId);
		}
	}
}