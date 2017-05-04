package com.service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.MovieMapper;
import com.mappers.OrderMapper;
import com.model.AccountTypeLK;
import com.model.Customer;
import com.model.Movie;
import com.model.Order;

import util.Constants.AccountTypes;
import util.Constants.MovieTypes;


@Service("orderService")
public class OrderService {
	  @Autowired
	
	  private OrderMapper orderMapper;

	  public List<Order> pastOrders(int id){
		  List<Order> order= orderMapper.pastOrders(id);
		  return order;
	  }
	  
	  public List<AccountTypeLK> getAccountTypes(){
		 return orderMapper.account_subscriptions();
	  }
	  
	  public List<Order> ordersByGenre(String genre){
		  List<Order> order= orderMapper.selectOrdersByGenre(genre);
		  return order;
	  }
	  public List<Order> ordersByMovie(Integer movieId){
		  List<Order> order= orderMapper.selectOrdersByMovie(movieId);
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
	  
	  public Map<String,Integer> getTotalSubscriptions(Integer month) {
			String [] account_types = AccountTypes.AccountTypeList;
			HashMap<String,Integer> subscriptionMap = new HashMap<String,Integer>();
			for(String type : account_types){
				Integer total = orderMapper.selectSubscriptionsByMonth(month, type);
				subscriptionMap.put(type, total);
			}
			return subscriptionMap;
	}
	  
	 public Map<String,Integer> getAllSubscriptions() {
			String [] account_types = AccountTypes.AccountTypeList;
			HashMap<String,Integer> subscriptionMap = new HashMap<String,Integer>();
			for(String type : account_types){
				Integer total = orderMapper.selectSubscriptionsTotal(type);
				subscriptionMap.put(type, total);
			}
			return subscriptionMap;
	}
	  
	  
	  
	  
}
