package com.example.empdata.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.empdata.model.loginData;
import com.example.empdata.model.userData;
import com.example.empdata.repository.loginRepository;
import com.example.empdata.repository.userRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class userController {

	 @Autowired
	  private userRepository userRepository;
	 
	 @Autowired
	  private loginRepository loginRepository;
	 
	    //Category Modules like Employee, Administrative, Human Resources
	 
	    @PostMapping("/hr/saveUser")
	    public String saveUser(@RequestBody userData data) {
	    	userRepository.save(data);
	        return "Success";
	    }
	    
	    //get all data
	    @GetMapping("/all/getUsers")
	    public List<userData> getUsers() {
	    	return	userRepository.findAll();
	    }
	    
	    @DeleteMapping(value="/hr/deleteUser/{id}")
	    public String deleteUser(@PathVariable long id) {
	    	userRepository.deleteById(id);
	        return "Deleted";
	    }
	    
	    //get particular data
	    @GetMapping(value="/all/getUser/{id}")
	    public Optional<userData> getUser(@PathVariable long id) {
	    	return userRepository.findById(id);
	      
	    }
	    
	    @PutMapping("/hr/updateUser")
	    public String updateUser(@RequestBody userData data) {
	         userRepository.save(data);
	         return "Updated";
	    }	
	    
	    
	    //Create User Modules 
	    
	    @PostMapping("/admin/saveCreateUser")
	    public String saveCreateUser(@RequestBody loginData data) {
	    	loginRepository.save(data);
	        return "Success";
	    }
	    
	    @GetMapping("/admin/getCreateUsers")
	    public List<loginData> getCreateUsers() {
	    	return	loginRepository.findAll();
	    }
	    
	    @DeleteMapping(value="/admin/deleteCreateUser/{id}")
	    public String deleteCreateUser(@PathVariable long id) {
	    	loginRepository.deleteById(id);
	        return "Deleted";
	    }
	    
	    @GetMapping(value="/admin/getCreateUser/{id}")
	    public Optional<loginData> getCreateUser(@PathVariable long id) {
	    	return loginRepository.findById(id);
	      
	    }
	    
	    @GetMapping(value="/admin/getCreateUserByUserId/{name}")
	    public loginData getCreateUser(@PathVariable String name) {
	    	return loginRepository.findByUserId(name);
	      
	    }
	    
	    @PutMapping("/admin/updateCreateUser")
	    public String updateCreateUser(@RequestBody loginData data) {
	    	loginRepository.save(data);
	         return "Updated";
	    }	
	    
}


