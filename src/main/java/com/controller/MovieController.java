package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.model.Movie;
import com.service.MovieService;
import util.Constants.MovieErrors;

@Controller
	@SessionAttributes("Movie")
	public class MovieController {

		 @Autowired
		 private MovieService movieService;
		 
		 // Get movie by name
		@RequestMapping(value="movie/{movieName}", method = RequestMethod.GET)
		 public @ResponseBody String getMovie(@PathVariable("movieName") String movieName) {
			
			return "OKAY";
			//Movie test =  movieService.getMovieByName(movieName);
			//return test != null ? test.getName() : MovieErrors.MOVIE_NOT_FOUND;
			
		}
		
		// Get a list of all movies
		@RequestMapping(value="movie/all", method = RequestMethod.GET)
		 public @ResponseBody List<Movie> getAllMovies() {
			List<Movie> movies =  movieService.getAllMovies();
			return movies;
		}
		
		@RequestMapping(value="movie/history/{customerId}", method = RequestMethod.GET)
		 public @ResponseBody List<Movie> getMovieHistory(@PathVariable("customerId") Integer customerId) {
			List<Movie> movieHistory =  movieService.getMovieHistory(customerId);
			
			if(movieHistory!=null){
				return movieHistory;
			}
			else{
				// return an empty list if the history is null
				return new ArrayList<Movie>(); 
			}
		}
		@RequestMapping(value="movie/add", method = RequestMethod.POST)
		 public @ResponseBody boolean addMovie(@RequestBody Movie newMovie) {
				
			return movieService.insertMovie(newMovie);
			
		}
		
		@RequestMapping(value="movie/type/{genre}", method = RequestMethod.GET)
		 public @ResponseBody List<Movie> getMovieByGenre(@PathVariable("genre") String genre) {
			try{
				return movieService.getMoviesByGenre(genre);
				
			}
			catch(Exception e){
				System.out.println(e); // Replace this with a logger.
				return null;
			}
			
		}
		
	}
