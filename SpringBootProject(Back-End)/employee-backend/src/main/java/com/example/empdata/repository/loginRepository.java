package com.example.empdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.empdata.model.loginData;

@Repository
public interface loginRepository extends JpaRepository<loginData, Long>{
	
	loginData findByEmailid(String email);
	
	loginData findByUserId(String userId);

}
