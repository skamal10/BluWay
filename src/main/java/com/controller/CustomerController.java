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
	 public @ResponseBody Customer getCustomer(@PathVariable("id") Integer id) {
		
	
		Customer test = customerService.getCustomerByID(id);
	
		return test;
	}
	
	
	
	
	 // Get all customer
	@RequestMapping(value="customer/all", method = RequestMethod.GET)
	 public @ResponseBody List<Customer> selectAll() {
		

		List<Customer> test = customerService.getAllCustomers();
	
		return test;
	}
	
	

	 // Get most active customer
	@RequestMapping(value="customer/mostActive", method = RequestMethod.GET)
	 public @ResponseBody List<Customer> mostActive() {
		
		//return "OKAY";
		List<Customer> test = customerService.mostActive();
		//return (test != null ? test.getId(): -1);
		return test;
	}
	
	
	
	
	
	 // add customer
	@RequestMapping(value="customer/add", method = RequestMethod.POST)
	 public @ResponseBody boolean addCustomer(@RequestBody Customer newCustomer) {
			
		return customerService.addCustomer(newCustomer);
		
	}
	
	
	 // Get current Movies for customer
	@RequestMapping(value="customer/currentMovies/{id}", method = RequestMethod.GET)
	 public @ResponseBody List<Movie> currentMovies(@PathVariable("id") Integer id ){
		
		//return "OKAY";
		List<Movie> test = customerService.currentMovies(id);
		//return (test != null ? test.getId(): -1);
		return test;
	}
	
	
	
	
	
	 // Get current Queue for customer
	@RequestMapping(value="customer/customerQueue/{id}", method = RequestMethod.GET)
	 public @ResponseBody List<Movie> customerQueue(@PathVariable("id") Integer id ){
		
		//return "OKAY";
		List<Movie> test = customerService.customerQueue(id);
		//return (test != null ? test.getId(): -1);
		return test;
	}
	
	
	 // Get past orders  for customer
	@RequestMapping(value="customer/pastOrders/{id}", method = RequestMethod.GET)
	 public @ResponseBody List<Movie> pastOrders(@PathVariable("id") Integer id ){
		
		//return "OKAY";
		List<Movie> test = customerService.pastOrders(id);
		//return (test != null ? test.getId(): -1);
		return test;
	}
	
	
	
	
	
	
	 
	 
}
