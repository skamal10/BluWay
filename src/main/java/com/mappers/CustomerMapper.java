package com.mappers;


import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.model.Customer;
import com.model.Movie;

public interface CustomerMapper {
	
	public List<Customer> selectAll();
	public void updateCustomerById(@Param("id")Integer id);
	public void insertCustomer(@Param("customer") Customer customer); 
	public Customer selectById(@Param("id")Integer id);
	
	//Produce a list of most active customers DONE
	public List<Customer> mostActive();
	
	//A customer's currently held movies DONE
	public List<Movie> currentMovies(@Param("id")Integer id);
	
	//A customer's queue of movies it would like to see DONE 
	public List<Movie> customerQueue(@Param("id")Integer id);
	
	
	//A history of all current and past orders a customer has placed DONE
	public List <Movie> pastOrders(@Param("id")Integer id); 
	

	//A customer's account settings
	

	
}
