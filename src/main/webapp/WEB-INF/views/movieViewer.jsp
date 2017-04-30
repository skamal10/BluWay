<div class="jumbotron text-center">
  <h1>{{movie.name}}</h1>

</div>


<div class="container">

  <div class="row">
  
	  <div class="col-sm-6">
  	<img ng-src="resources/images/{{movie.id}}.jpg" alt="Description" class="featuredImages" />
  
  	</div>
  
    <div class="col-sm-6">

 
		
		{{movie.description}}
		
		<div ng-controller="MovieViewCtrl">
    <h4>Rating</h4>
    <uib-rating ng-model="movieRating" max="max" read-only="isReadonly" on-hover="hoveringOver(data)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></uib-rating>

  <h4>Starring</h4>
  	<div ng-repeat = "actor in actors">{{actor.name}}</div>




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
                    <button type="submit" class="btn btn-success">Order</button>
                    <button type="submit" class="btn btn-primary">Add to Queue</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>