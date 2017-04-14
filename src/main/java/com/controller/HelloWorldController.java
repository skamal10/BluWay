package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.model.Movie;
import com.service.MovieService;

@Controller
	@SessionAttributes("Movie")
	public class HelloWorldController {

		 @Autowired
		 private MovieService movieService;
		 
		 
		@RequestMapping(value="movie/{movieName}", method = RequestMethod.GET)
		 public @ResponseBody String getMovie(@PathVariable("movieName") String movieName) {
			Movie test =  movieService.getMovieByName(movieName);
			return test.getName();
		}
		
		@RequestMapping(value="movie/all", method = RequestMethod.GET)
		 public @ResponseBody List<Movie> getAllMovies() {
			List<Movie> movies =  movieService.getAllMovies();
			return movies;
		}
	}
