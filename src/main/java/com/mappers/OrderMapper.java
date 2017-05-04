package com.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.AccountTypeLK;
import com.model.Customer;
import com.model.Movie;
import com.model.Order;

public interface OrderMapper {
	
	//public List<Order> selectAll();
	public List <Order> pastOrders(@Param("id")Integer id); 
	//public List <Integer> movieRating(@Param("id")Integer id);
	public void addRating(@Param("order") Order order);
	public List<AccountTypeLK> account_subscriptions();
	public void addAvgRating(@Param("id") Integer id); // return int which is new rating
	public List<Order> selectOrdersByGenre(@Param("genre") String genre);
	public List<Order> selectOrdersByMovie(@Param("movieId") Integer movieId);
	public Integer selectSubscriptionsByMonth(@Param("month")Integer month, @Param("type")String type);
	public Integer selectSubscriptionsTotal(@Param("type")String type);
}
