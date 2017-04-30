package com.mappers;

import java.util.*;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.Actor;


public interface ActorMapper {
	public List<Actor> selectAll();
	public List<Actor>actorsAppeared(Integer movieId);
	

}
