package com.example.PersonalExpenseTracker.controller;

import com.example.PersonalExpenseTracker.entity.Expense;
import com.example.PersonalExpenseTracker.service.ExpenseService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://personal-expense-tracker-frontend-xm1p.onrender.com"
})
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    @PostMapping
    public Expense addExpense(@Valid @RequestBody Expense expense) {
        return service.addExpense(expense);
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return service.getAllExpenses();
    }

    @GetMapping("/{id}")
    public Expense getExpense(@PathVariable Long id) {
        return service.getExpenseById(id);
    }

    @PutMapping("/{id}")
    public Expense updateExpense(
            @PathVariable Long id,
            @Valid @RequestBody Expense expense) {
        return service.updateExpense(id, expense);
    }

    @DeleteMapping("/{id}")
    public String deleteExpense(@PathVariable Long id) {
        service.deleteExpense(id);
        return "Expense deleted successfully";
    }

    @GetMapping("/category/{category}")
    public List<Expense> getByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }
}