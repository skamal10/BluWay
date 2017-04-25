package com.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.model.Customer;
import com.model.Employee;
import com.service.CustomerService;
import com.service.EmployeeService;

import util.Constants.CustomerErrors;
import util.Constants.EmployeeErrors;


@Controller
@SessionAttributes("Employee")

public class EmployeeController {

	
	 @Autowired
	 private EmployeeService employeeService;
	 
	
	 
	 // Get employee by id
	@RequestMapping(value="employee/{id}", method = RequestMethod.GET)
	 public @ResponseBody String getEmplpyee(@PathVariable("id") Integer id) {
		

		
		Employee test = employeeService.getEmployeeByID(id);
		return (String) (test != null ? test.getSSN() : EmployeeErrors.EMPLOYEE_NOT_FOUND);
		
	}
	
	
}
