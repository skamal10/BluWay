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
	
	

}
