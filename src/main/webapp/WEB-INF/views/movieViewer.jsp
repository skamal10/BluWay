<div class="jumbotron text-center">
  <h1>{{movie.name}}</h1>

</div>


<div class="container">

  <div class="row">
  
	  <div class="col-sm-6">
  	<img ng-src="resources/images/{{movie.id}}.jpg" alt="Description" class="featuredImages" />
  	<md-chips ng-show = "editMode" ng-model="actors" readonly="isReadonly" md-removable="isReadonly" md-on-remove="removeAppearance($chip.id)">
  	<md-chip-template>
        <span>
          {{$chip.name}}
        </span>
      </md-chip-template>
  	</md-chips>
  	
  	<input placeholder= "Search for Actor" ng-show="editMode" type="text" ng-model=selectedActor uib-typeahead="actor as actor.name for actor in allActors | filter:{name:$viewValue} | limitTo:8" class="form-control">
  	<button ng-disabled = "!selectedActor.id" type="submit" ng-click="addAppearance()" class="btn btn-primary" ng-show="editMode">Add Actor to Movie</button>
  	<button ng-show="editMode" class="btn btn-default" ng-click="open('lg')">Quick Add Actor</button>
  	</div>
  
    <div class="col-sm-6">

 
		
		{{movie.description}}

<div ng-show="!editMode">
    <h4>Rating</h4>
    <uib-rating ng-model="movieRating" style= color:gold max="max" read-only="isReadonly" on-hover="hoveringOver(data)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></uib-rating>

  <h4>Starring</h4>
  	<div ng-repeat = "actor in actors"> <a href="#/actor/{{actor.id}}"> {{actor.name}}</a></div>
</div>

<div ng-show = "editMode">
   <form>
   <div class="row">
  <div class="form-group col-md-8">
    <label for="movieInput">Movie Name</label>
    <input type="text" class="form-control" ng-model="movie.name" placeholder="Movie Name">
  </div>
  </div>
  <div class="row">
 <div class="form-group col-md-6">
 		  <label for="distrFee">Distribution Fee</label>
	<div class="input-group">
	      <div class="input-group-addon">$</div>
	      <input type="text" class="form-control" id="distrFee" ng-model="movie.distributionFee" placeholder="Distribution Fee">
	      <div class="input-group-addon">.00</div>
	 </div>
 </div>
 </div>
 <div class="row">
 <div class="form-group col-md-4">
    <label for="numCopies">Available Copies</label>
    <input type="number" class="form-control" id="numCopies" ng-model="movie.numCopies" placeholder="Copies">
 </div>
 </div>
  <div class="form-group">
   <label >Genre</label>
 <select class="form-control" ng-model="movie.type">
 <option value="" disabled selected>Select Genre</option>
  <option value="Comedy">Comedy</option>
  <option value = "Drama">Drama</option>
  <option value = "Horror" >Horror</option>
  <option value = "Adventure">Adventure</option>
  <option value = "Romance" >Romance</option>
  <option value = "Family">Family</option>
</select>
 </div>
 <div class="form-group">
  <div class="checkbox">
    <label for="featured">
      <input type="checkbox" ng-model="movie.featured"> Featured
    </label>
  </div>
  </div>
  <label >Movie Description</label>
 <textarea class="form-control" rows="3"></textarea>
</form>
</div>


		

     <div class="form-group">
    &nbsp;
</div>
   
   

	
   
   	</div>
   
   
    <div class="row">

    
    
   </div>
   
   <div class="form-group">
    &nbsp;
</div>
   
 <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div  class="text-center">
                    <button type="submit" class="btn btn-success" ng-show="!editMode">Order</button>
                    <button type="submit" class="btn btn-primary" ng-show="!editMode" ng-click="addToQueue(movie)">Add to Queue</button>
                    <button type="submit" class="btn btn-primary" ng-show="!editMode" ng-click="toggleEditMode()" >Edit</button>
                      <button type="submit" class="btn btn-primary" ng-show="editMode" ng-click="toggleEditMode()">Cancel</button>
                    <button type="submit" class="btn btn-primary" ng-show="editMode" ng-click="updateMovie()">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>