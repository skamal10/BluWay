package com.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.Movie;

public interface MovieMapper {

	  public List<Movie> selectAll();
	  public Movie selectByName(@Param("name")String name);
}
