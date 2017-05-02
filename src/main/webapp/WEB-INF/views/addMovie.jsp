<div class="jumbotron text-center">
  <h1 ng-show="movie.name">{{movie.name}}</h1>
  <h1 ng-show="!movie.name">New Movie </h1>

</div>


<div class="container">

  <div class="row">
  
	  <div class="col-sm-6">
  	<img src="resources/images/1.jpg" alt="Description" class="featuredImages" />
  
  	</div>
  
    <div class="col-sm-6">

 
		
	<div>
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
		
    &nbsp;
   
   

	
   
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
                    <button type="submit" class="btn btn-success" ng-click="submitNewMovie()">Add Movie</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>