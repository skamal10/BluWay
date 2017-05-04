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
	 
	 public Employee loggedInUser;
	 
	
	 
	 // Get employee by id
	@RequestMapping(value="employee/{SSN}", method = RequestMethod.GET)
	 public @ResponseBody Employee getEmployee(@PathVariable("SSN") Integer SSN) {
		

		
		Employee test = employeeService.getEmployeeByID(SSN);
		return test;
		
	}
	
	@RequestMapping(value="employee/logout", method = RequestMethod.POST)
	 public @ResponseBody Integer employeeLogout() {
		loggedInUser = null;
		return 1;
	}
	
	@RequestMapping(value="employee/current", method = RequestMethod.GET)
	 public @ResponseBody Employee getCurrentEmployee() {
		
		return loggedInUser;
		
	}
	
	@RequestMapping(value="employee/login", method = RequestMethod.POST)
	 public @ResponseBody Employee getEmployee(@RequestBody Employee employee) {
		Employee test = employeeService.getEmployeeByID(employee.getSSN(), employee.getPassword());
		return test;
		
	}

	
	 // Get all employee
	@RequestMapping(value="employee/all", method = RequestMethod.GET)
	 public @ResponseBody List<Employee> selectAll() {
		

		List<Employee> test = employeeService.getAllEmployees();
	
		return test;
	}
	
	
	 // Add employee
	@RequestMapping(value="employee/add", method = RequestMethod.POST)
	boolean addEmployee(@RequestBody Employee newEmployee) {
		
		return employeeService.addEmployee(newEmployee);
		
	}
	
	
	 // Most Active
	@RequestMapping(value="employee/mostActive", method = RequestMethod.GET)
	 public @ResponseBody Employee mostActive() {
		

		Employee test = employeeService.mostActive();
	
		return test;
	}
	

}
