package com.mappers;


import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.model.Customer;
import com.model.Movie;

public interface CustomerMapper {
	
	public List<Customer> selectAll();

	public void updateCustomerById(@Param("customer")Customer customer); 
	public Customer selectById(@Param("SSN")Long SSN);
	public int updateCustomerInfo(@Param("customer")Customer customer);
	public int updatePersonInfo(@Param("customer")Customer customer);
	public int updateAccountInfo(@Param("customer")Customer customer);
	
	public int insertLocation(@Param("zip")Integer zip, @Param("city")String city, @Param("state")String state);
	public int insertPerson(@Param("customer")Customer customer);
	public int insertCust(@Param("customer")Customer customer);
	public int insertAccount(@Param("customer")Customer customer);

	
	//Produce a list of most active customers DONE
	public List<Customer> mostActive();
	
	public Customer login(@Param("email")String email);
	
	//A customer's currently held movies DONE
	public List<Movie> currentMovies(@Param("id")Integer id);
	
	//A customer's queue of movies it would like to see DONE 
	public List<Movie> customerQueue(@Param("id")Integer id);
	
	
	//A history of all current and past orders a customer has placed DONE
	public List <Movie> pastOrders(@Param("id")Integer id); 
	public Integer selectByAccount(@Param("accountId")Integer accountId);
	

	//A customer's account setting
	

	
}
