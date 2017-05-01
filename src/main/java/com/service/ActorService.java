package com.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.ActorMapper;
import com.model.Actor;


@Service("actorService")
public class ActorService {
	@Autowired
	
	private ActorMapper actorMapper;
	
	public List<Actor> selectAll(){
		List <Actor> allActors = actorMapper.selectAll();	
		return allActors;
	}
	
	//retrieves a list of actors in a movie
	public List<Actor>actorsAppeared(Integer movieId){
		List <Actor> actors = actorMapper.actorsAppeared(movieId);
		return actors; 
		
	}
	
	public Actor getActorById(Integer actorId){
		Actor actor = actorMapper.selectById(actorId);
		return actor;
	}
	

}
