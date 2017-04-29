package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.model.Actor;
import com.service.ActorService;
import util.Constants.ActorErrors;

@Controller
@SessionAttributes("Actor")
public class ActorController {
		@Autowired
		private ActorService actorService;
		
		// Get a list of all Actors
		@RequestMapping(value="actor/all", method = RequestMethod.POST)
		 public @ResponseBody List<Actor> getAllActors() {
			List<Actor> actors = actorService.selectAll();
			return actors;
		}		

}
