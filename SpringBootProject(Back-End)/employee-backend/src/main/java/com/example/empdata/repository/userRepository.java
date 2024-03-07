package com.example.empdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.empdata.model.userData;


@Repository
public interface userRepository extends JpaRepository<userData, Long>{
	
	userData findByEmailid(String email);

}
