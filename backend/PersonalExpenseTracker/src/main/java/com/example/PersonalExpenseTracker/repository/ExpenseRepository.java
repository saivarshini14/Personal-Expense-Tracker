
package com.example.PersonalExpenseTracker.repository;

import com.example.PersonalExpenseTracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExpenseRepository
        extends JpaRepository<Expense, Long> {

    List<Expense> findByCategoryIgnoreCase(String category);
}
