package com.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mappers.ActorMapper;
import com.model.Actor;
import com.model.AppearedIn;


@Service("actorService")
public class ActorService {
	@Autowired
	
	private ActorMapper actorMapper;
	
	public List<Actor> selectAll(){
		List <Actor> allActors = actorMapper.selectAll();	
		return allActors;
	}
	
	
	public List<Actor> removeAppearance(AppearedIn appearance){
		try{
			actorMapper.deleteAppearance(appearance);
			return actorMapper.actorsAppeared(appearance.getMovieId());
		}
		catch(Exception e){
			System.out.println("ERROR AT INSERT APPEARANCE --> ActorService "+e);
			return null;
		}
	}
	
	public List<Actor> addAppearance(AppearedIn appearance){
		try{
			actorMapper.insertAppearance(appearance);
			return actorMapper.actorsAppeared(appearance.getMovieId());
		}
		catch(Exception e){
			System.out.println("ERROR AT INSERT APPEARANCE --> ActorService "+e);
			return null;
		}
	}
	
	public int addAllAppearances(List<AppearedIn> appearances){
		try{
			for(AppearedIn appearance : appearances){
				actorMapper.insertAppearance(appearance);
			}
			return 1;
		}
		catch(Exception e){
			System.out.println("ERROR AT INSERT ALL APPEARANCE --> ActorService "+e);
			return -1;
		}
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
	
	public int insertActor(Actor actor){
		try{
			return actorMapper.insertActor(actor);
		}
		catch(Exception e){
			System.out.println("ERROR AT INSERT ACTOR --> ActorService "+e);
			return -1;
		}
	}
	

}
