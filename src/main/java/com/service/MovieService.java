package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.MovieMapper;
import com.model.Movie;



@Service("movieService")
public class MovieService {
	  @Autowired
	 private MovieMapper movieMapper;
	
	
	 public List<Movie> getAllMovies(){
		 List<Movie> movie = movieMapper.selectAll();
		 return movie;
	 }
	 
	 public Movie getMovieById(Integer id){
		Movie movie = movieMapper.selectById(id);
		return movie;
	 }
	 
	 public Movie getMovieByName(String movieName){
		 Movie movie = movieMapper.selectByName(movieName);
		 return movie;
	 }
	 
	 public List<Movie> getMovieHistory(Integer customerId){
		 List<Movie> movieHistory = movieMapper.selectMoviesHistoryByCustomerId(customerId);
		 return movieHistory;
	 }
	 
	 public boolean insertMovie(Movie movie){
		 try{
			 movieMapper.insertMovie(movie);
			 return true;
		 }
		 catch(Exception e){
			 System.out.println(e);
			 return false;
		 }
		 
	 }
	 
	 public List<Integer> getHomeScreenMovies(){
		 try{
			 List<Integer> movies = movieMapper.selectHomeScreenMovies();
			 return movies;
		 }
		 catch(Exception e){
			 System.out.println(e);
			 return null;
		 }
	 }

	 public List<Movie> getMoviesByGenre(String type){
		 List<Movie> movies = movieMapper.selectMoviesByType(type);
		 return movies != null ? movies : new ArrayList<Movie>(); // return empty list if movies is null
	 }
	 
	 public List<Movie> getMovieQ(Integer accountId){
		 List<Movie> movies = movieMapper.selectMovieQueue(accountId);
		 return movies != null ? movies : new ArrayList<Movie>(); // return empty list if movies is null
	 }
}
