
 
<div class="container">
<h1>My Past Orders and Ratings</h1>
    <div class="form-group">
    &nbsp;
</div>
 
 
      <div class="form-group">
    &nbsp;
</div>
 

	<div ng-repeat = "order in orders"> 
	
	 <div class="row">
  
 <div class="col-xs-3">
	
	<img ng-src="resources/images/{{order.movieId}}.jpg" alt="Description" class="img-responsive" />
	     <div class="form-group">
    &nbsp;
</div>
</div>

  <div class="col-sm-5">
  
  	<h4>  {{order.movieName}}</h4>
   	<h4>Order Number: {{order.id}}</h4>
   	
   	 <h4>Return Date: 
   	 <div ng-if="order.returnDate == null">Not Returned</div>
   	 <div ng-if="order.returnDate != null">{{order.returnDate}}</div>
   	 </h4>
  
  </div>
 <div class="col-sm-4">


   
   	 
   	  
  	<h4>Rating</h4>
    <uib-rating ng-model="order.movieRating" max=5 read-only="isReadonly" on-hover="hoveringOver(data)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating" style= color:gold></uib-rating>
  	
  	
  
        <div class="row">
         
                <div  class="text-left">
                    <button type="submit" class="btn btn-success" ng-click="submitRating(order)"  >Save Rating</button>
                    
         
            </div>
        </div>
   

  
	 </div>
 
	
	 </div>
	 
	 	 </div>
 
  
	 </div>
	 
	 
	 