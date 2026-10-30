package com.example.PersonalExpenseTracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.PersonalExpenseTracker")
public class PersonalExpenseTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(
            PersonalExpenseTrackerApplication.class, args);
    }
}