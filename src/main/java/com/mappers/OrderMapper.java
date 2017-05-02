package com.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.model.Customer;
import com.model.Movie;
import com.model.Order;

public interface OrderMapper {
	
	//public List<Order> selectAll();
	public List <Order> pastOrders(@Param("id")Integer id); 
	//public List <Integer> movieRating(@Param("id")Integer id);
	public void addRating(@Param("order") Order order);
	public void addAvgRating(@Param("id") Integer id); // return int which is new rating
}
