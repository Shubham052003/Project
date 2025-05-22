package com.itvedant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExpenseService {

	@Autowired
	private ExpenseRepository repo;
	
	public List<Expense> getAllExpenses(){
		return repo.findAll();
	}
	public Expense addExpense(Expense expense) {
		return repo.save(expense);
	}
	
	public void deleteExpense(Long id) {
		repo.deleteById(id);
	}

}
