package com.itvedant;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService service;
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?>adduser(@RequestBody User user){
		String msg=service.adduser(user);
		return ResponseEntity.ok(msg);
	
	}
	
	
	
	@PostMapping("/get/{email}/{password}")
	public ResponseEntity<?> getuser(@PathVariable String email, @PathVariable String password) {
		System.out.println(email+" "+password);
		String u=service.getuser(email,password);
		return ResponseEntity.ok(u);
	}
	 
	
	
	

}