
package com.example.PersonalExpenseTracker.service;

import com.example.PersonalExpenseTracker.entity.Expense;
import com.example.PersonalExpenseTracker.repository.ExpenseRepository;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    // Add Expense
    public Expense addExpense(Expense expense) {
        return repository.save(expense);
    }

    // View All Expenses
    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    // View Expense By ID
    public Expense getExpenseById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Expense not found"));
    }

    // Update Expense
    public Expense updateExpense(Long id, Expense expense) {

        Expense existing = getExpenseById(id);

        existing.setTitle(expense.getTitle());
        existing.setAmount(expense.getAmount());
        existing.setCategory(expense.getCategory());
        existing.setDate(expense.getDate());

        return repository.save(existing);
    }

    // Delete Expense
    public void deleteExpense(Long id) {
        repository.delete(getExpenseById(id));
    }

    // Filter By Category
    public List<Expense> getByCategory(String category) {
        return repository.findByCategoryIgnoreCase(category);
    }
}
