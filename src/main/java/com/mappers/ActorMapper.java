package com.mappers;

import java.util.*;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.Actor;
import com.model.AppearedIn;


public interface ActorMapper {
	public List<Actor> selectAll();
	public int insertActor(@Param("actor")Actor actor);
	public int insertAppearance(@Param("appearance")AppearedIn appearance);
	public int deleteAppearance(@Param("appearance")AppearedIn appearance);
	public List<Actor>actorsAppeared(@Param("movieId")Integer movieId);
	public Actor selectById(@Param("id")Integer id);
	
	

}
