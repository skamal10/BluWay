package com.service;

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
	 
	 public Movie getMovieByName(String movieName){
		 Movie movie = movieMapper.selectByName(movieName);
		 return movie;
	 }
	 
}
