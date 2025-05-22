package com.itvedant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
       UserRepository repo;

	public User getbyid(int id) {
		// TODO Auto-generated method stub
		User user=repo.findById(id).orElse(null);
		return user;
		
	}


	public String getuser(String username, String password) {
	    // Fetch user from repository
		User u=null;
	     u = repo.getuser(username, password);

	    if (u == null) {
	        return "user not found";
	    }
	    else {
	    	return  "user exists";
	    }

	  
	}

	public User getbyusername(String username) {
	    // Fetch user from repository
		User u=null;
	     u = repo.getbyusername(username);

	    if (u == null) {
	       
	    }
	    else {
	    	return  u;
	    }
		return u;

		
	}

	public String adduser(User user) {
		List<User> u=null;
		  
	     u=repo.findAll();
         
	     for(User user1: u ) {
	    	 
	    	 if(user1.equals(user.getUsername())){
	    		 
	    		 return "user already exists";
	    	 }
	    	 
	     }
	
	     
	    
    		 repo.save(user);
    		 return "User Added";
    	
    	 
		    	
		   
			
		
	}


	public boolean existsByEmail(String email) {
		// TODO Auto-generated method stub
		return false;
	}


}