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
import com.model.Movie;
import com.service.CustomerService;
import com.service.MovieService;

import util.Constants.CustomerErrors;


@Controller
@SessionAttributes("Customer")



public class CustomerController {

	
	 @Autowired
	 private CustomerService customerService;
	 
	 
	 // Get customer by id
	@RequestMapping(value="customer/{id}", method = RequestMethod.GET)
	 public @ResponseBody String getCustomer(@PathVariable("id") Integer id) {
		
		
		return "OKAY";
		//Customer test = customerService.getCustomerByID(id);
		//return (String) (test != null ? test.getSSN() : CustomerErrors.CUSTOMER_NOT_FOUND);
		
	}
	
	
	
	
	
	
	
	
	
	
	 
	 
}
