package com.example.empdata.service;

import com.example.empdata.model.loginData;

public interface UserService {
	
	void addUser(loginData user);
	
	void updateUser(loginData user);

	loginData fetchUserByUserId(String userId);

	String updateUserPassword(String userId, String currentPassword, String newPassword);
}
