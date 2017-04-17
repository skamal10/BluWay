package com.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.Movie;

public interface MovieMapper {

	  public List<Movie> selectAll();
	  public Movie selectByName(@Param("name")String name);
	  public List<Movie> selectMoviesHistoryByCustomerId(@Param("customerId")Integer customerId);
	  public void updateByPrimaryKey(@Param("movie")Movie movie);
	  public void insertMovie(@Param("movie") Movie movie);
	  public List<Movie> selectMoviesByType(@Param("type") String type);
	  
}
