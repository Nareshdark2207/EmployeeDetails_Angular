package com.example.empdata.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class JwtRequest implements Serializable{

private String username;
	
	private String password;
	
	public JwtRequest() {

	}

	public JwtRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
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
	
}
