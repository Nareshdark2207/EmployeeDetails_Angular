package com.example.empdata.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.empdata.model.loginData;
import com.example.empdata.repository.loginRepository;

@SuppressWarnings("unused")
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private loginRepository loginRepository;

	@Override
	public void addUser(loginData user) {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateUser(loginData user) {
		loginRepository.save(user);

	}
	
	@Override
	public loginData fetchUserByUserId(String userId) {
		return loginRepository.findByEmailid(userId);
	}
	
	@Override
	public String updateUserPassword(String userId, String currentPassword, String newPassword) {
		loginData userDetails = fetchUserByUserId(userId);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		if (userDetails!=null) {
			if(passwordEncoder.matches(currentPassword, userDetails.getPassword())) {
				userDetails.setPassword(passwordEncoder.encode(newPassword));
				updateUser(userDetails);
			}
			else {
				throw new RuntimeException("The Current Password you entered is incorrect");
			}
		} else {
			throw new RuntimeException("User not found with userId: " + userId);
		}

		return userId;
		
	}
	

}
