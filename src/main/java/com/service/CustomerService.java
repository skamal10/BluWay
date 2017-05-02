package com.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.CustomerMapper;
import com.model.Customer;
import com.model.Movie;



@Service("customerService")
public class CustomerService {
	  @Autowired
	  private CustomerMapper customerMapper;
	  
	  
	  public Customer getCustomerByID(Long id){
		  Customer customer= customerMapper.selectById(id);
		  return customer;
		  
	  }
	  
	  public List<Customer> getAllCustomers(){
		  List <Customer> customer= customerMapper.selectAll();
		  return customer;
	  }
  
	  public boolean addCustomer(Customer customer){
			 try{
				 customerMapper.insertCustomer(customer);
				 return true;
			 }
			 catch(Exception e){
				 System.out.println(e);
				 return false;
			 }
			 
	  }
	  
	  
//	  public boolean updateCustomer(int id){
//		  try{
//		  customerMapper.updateCustomerById(id);
//		  return true;
//		  }
//			 catch(Exception e){
//				 System.out.println(e);
//				 return false;
//			 }
//		  
//	  }
	  
	  public List<Customer> mostActive(){
		 List<Customer> customer= customerMapper.mostActive();
		 return customer;
	  }
	  
	  
	  public List<Movie> currentMovies(int id){
		  List<Movie> movie= customerMapper.currentMovies(id);
		  return movie;
	  }
	  
	  public List<Movie> pastOrders(int id){
		  List<Movie> movie= customerMapper.pastOrders(id);
		  return movie;
	  }
	  
	  

	  public List<Movie> customerQueue(int id){
		  List<Movie> movie= customerMapper.customerQueue(id);
		  return movie;
	  }
	  
	  
}
