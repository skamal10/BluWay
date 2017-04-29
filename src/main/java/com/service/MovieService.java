package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.MovieMapper;
import com.model.Movie;

import util.Constants.MovieTypes;



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
	 
	 public List<List<Movie>> getMoviesFromGenreCollection(Integer accountId){
		 List<List<Movie>> genreList = new ArrayList<List<Movie>>();
		 List<String> favoriteGenres= null;
		//First load the favorite genres based on user history
		 favoriteGenres = movieMapper.selectUserFavoriteGenres(accountId);
		
		 //If this list is empty (in the case of a new user), load the 
		 if(favoriteGenres == null || favoriteGenres.size() <1){
			 favoriteGenres = movieMapper.selectSystemFavoriteGenres();
		 }
		 
		 if(favoriteGenres.size() < MovieTypes.DEFAULT_DISPLAY_GENRES){
			 // if the list is still not populated with 5 genres, add from the default list
			 addGenresNotInList(favoriteGenres);
		 }
		 
		 // generate a list of movies per each genre
		 for(String genre : favoriteGenres){
			 List<Movie> movieList = getMoviesByGenre(genre);
			 genreList.add(movieList);
		 }
		 
		 return genreList;
		 
	 }
	 
	 public List<Movie> getMovieQ(Integer accountId){
		 List<Movie> movies = movieMapper.selectMovieQueue(accountId);
		 return movies != null ? movies : new ArrayList<Movie>(); // return empty list if movies is null
	 } 
	 private void addGenresNotInList(List<String> genres){
		 int i=0;
		 String[] defaultMovies = MovieTypes.TypeList;
		 while(genres.size() < MovieTypes.DEFAULT_DISPLAY_GENRES && i++ < defaultMovies.length){
			
			 if(!genres.contains(defaultMovies[i])){
				 genres.add(defaultMovies[i]);
			 }
		 }
	 }

	public List<Movie> actorAppearedIn(String actorName) {
			System.out.println("Before: IN the Service class");
			System.out.println("======>");
			System.out.println("==>" + movieMapper.actorAppearedIn(actorName));
//			List<Movie> movies = movieMapper.actorAppearedIn(actorName);
//			return movies != null ? movies : new ArrayList<Movie>(); // return empty list if movies is null
			return new ArrayList<Movie>();
	}
	 

}
