package com.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.model.Order;
import com.model.AccountTypeLK;
import com.model.Customer;
import com.model.Movie;
import com.service.OrderService;

@Controller
	@SessionAttributes("Order")
public class OrderController {

@Autowired
private OrderService orderService;
	
	 // Get past orders  for customer
	@RequestMapping(value="order/pastOrders/{id}", method = RequestMethod.GET)
	 public @ResponseBody List<Order> pastOrders(@PathVariable("id") Integer id ){
		
		//return "OKAY";
		List<Order> test = orderService.pastOrders(id);
		//return (test != null ? test.getId(): -1);
		return test;
	}
	
	
//	
//	@RequestMapping(value="rental/movieRating/{id}", method = RequestMethod.GET)
//	 public @ResponseBody List<Integer> movieRating(@PathVariable("id") Integer id ){
//		
//		//return "OKAY";
//		List<Integer> test = orderService.getRating(id);
//		//return (test != null ? test.getId(): -1);
//		return test;
//	}
	
	
	
	
	
	 // add rating
		@RequestMapping(value="order/updateRating", method = RequestMethod.POST)
		 public @ResponseBody boolean addRating(@RequestBody Order order){
		
			 orderService.addRating(order);
			orderService.addAvgRating(order.getMovieId());
			return true;
		}
		
		@RequestMapping(value="order/byGenre/{genre}", method = RequestMethod.GET)
				 public @ResponseBody List<Order> getOrderByGenre(@PathVariable("genre") String genre){
						return orderService.ordersByGenre(genre);
				}
		
		@RequestMapping(value="order/byMovie/{movieId}", method = RequestMethod.GET)
		 public @ResponseBody List<Order> getOrdersForMovie(@PathVariable("movieId") Integer movieId){
				return orderService.ordersByMovie(movieId);
		}
		
		@RequestMapping(value="account/subscription-types", method = RequestMethod.GET)
		 public @ResponseBody List<AccountTypeLK> getSubscriptionTypes(){
				return orderService.getAccountTypes();
		}
		
		@RequestMapping(value="account/subscription-types/{month}", method = RequestMethod.GET)
		 public @ResponseBody Map<String,Integer> getSubscriptionTypes(@PathVariable("month") Integer month){
			if(month!=0){
				return orderService.getTotalSubscriptions(month);
			}
			else{
				return orderService.getAllSubscriptions();
			}
		}
//		
//		
//
//		 // update avg rating
//			@RequestMapping(value="order/updateAvgRating", method = RequestMethod.POST)
//			 public @ResponseBody boolean addAvgRating(@RequestBody int id) {
//					
//				return orderService.addAvgRating(id);
//				
//			}
	
}
