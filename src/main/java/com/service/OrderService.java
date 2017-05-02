package com.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.MovieMapper;
import com.mappers.OrderMapper;
import com.model.Customer;
import com.model.Movie;
import com.model.Order;


@Service("orderService")
public class OrderService {
	  @Autowired
	
	  private OrderMapper orderMapper;

	  public List<Order> pastOrders(int id){
		  List<Order> order= orderMapper.pastOrders(id);
		  return order;
	  }
	  
//	  public List<Integer> getRating(int id){
//		  List<Integer> test= orderMapper.movieRating(id);
//		  return test;
//	  }
//	  
	  public boolean addRating(Order order){
			 try{
				 orderMapper.addRating(order);
				 
				 return true;
			 }
			 catch(Exception e){
				 System.out.println(e);
				 return false;
			 }
			 
	  }
	  
//	  
	  public boolean addAvgRating(int id){
			 try{
				 orderMapper.addAvgRating(id);
				 return true;
			 }
			 catch(Exception e){
				 System.out.println(e);
				 return false;
			 }
			 
	  }
	  
	  
	  
	  
}
