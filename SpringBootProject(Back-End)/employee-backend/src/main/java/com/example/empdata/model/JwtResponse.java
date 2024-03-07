package com.example.empdata.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class JwtResponse implements Serializable {
	
	private final String jwtToken;
	
	public JwtResponse(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
	public String getToken() {
		return this.jwtToken;
	}
	
}
