package com.itvedant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/expense")
public class ExpenseController {
	@Autowired
	private ExpenseService service;
	
	@GetMapping("/get")
	public List<Expense> getAllExpenses(){
		return service.getAllExpenses();
	}
	@PostMapping("/add")
	public ResponseEntity<?> addExpense(@RequestBody Expense expense) {
		System.out.println(expense);
		service.addExpense(expense);
		return ResponseEntity.ok("expense added");
	}
	@DeleteMapping("/{id}")
	public void deleteExpense(@PathVariable Long id) {
		service.deleteExpense(id);
	}
	
	

}
