  <div class="cart" style="background-color: black" >
   <div class="container"  >
<p class="white">


  <div class="row">
       
        <div class="col-sm-6">

<h1 style=color:white>My Shopping Cart</h1>
    <div class="form-group">
    &nbsp;
</div>

</div>

       
  
</div>
</div>
 
 <div class="container" style="height: 100%">
 
  <div ng-repeat = "movies in shoppingCart" >
            
        <div class="row"">
       
        <div class="col-xs-2">
       
       
       <img ng-src="resources/images/{{movies.id}}.jpg" alt="Description" class="img-responsive" />
	    
	     <div class="form-group">
    &nbsp;
</div>
             </div>
       
       <div class="col-xs-4">  
           
         
             
             
             	<h4 style=color:white>{{movies.name}}</h4>
            	
    <uib-rating style=color:gold ng-model="movies.rating" max=5 read-only="isReadonly" on-hover="hoveringOver(data)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></uib-rating>
  	
       
           </div>
           
            
  <div class="col-xs-6">
  
                <div  class="text-right">
                   
                      <button type="submit" class="btn btn-danger" ng-click="deleteFromShoppingCart(movies)"> Delete</button>
        </div>
</div>   
        </div>
         
         
         </p>
           </div>
           <div  class="text-center">
            <button type="submit" class="btn btn-success" ng-click="placeOrder()">Order</button>
              </div>
            
               </div>
                     </div>