<<<<<<< HEAD
<div  >
=======

<div>
>>>>>>> branch 'master' of https://github.com/skamal10/BluWay.git
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  

  <!-- Wrapper for slides -->
  <div class="carousel-inner" style="background-color:black"  role="listbox">
   <div class="carousel-caption" style="font-size:30">
        BluWay Movies Coming Soon!
           </div>
    <div class="video_holder" >
               <video autoplay loop>
                
                 <source src="resources/video/vid2.mp4" type="video/mp4">
    
    </div> 
    
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>


<div style="background-color: black">


<div class="panel panel-default panel-custom" style="background-color: black">
  <div class="panel-heading"  >
    <h3 class="panel-title"  >Movie Queue</h3>
  </div>
  <div class="panel-body" style="background-color: black">

    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in movieQ" class="movieItem">
         <span><a ng-href="#/movie/{{movies.id}}"><img ng-src="resources/images/{{movies.id}}.jpg" alt="" class="img-responsive center-block" /></a></span>
          
           
        </li>
    </ul>
</div>
  </div>
</div>

<div class="panel panel-default panel-custom" style="background-color: black">
  <div class="panel-heading">
    <h3 class="panel-title">Your Personalized List</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in personalizedMovies" class="movieItem">
            <span><a ng-href=#/movie/{{movies.id}}><img ng-src="resources/images/{{movies.id}}.jpg" alt="" class="img-responsive center-block" /></a></span>
        </li>
    </ul>
</div>
  </div>
</div>

<div class="panel panel-default panel-custom" style="background-color: black">
  <div class="panel-heading">
    <h3 class="panel-title">Best Selling Movies</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in bestSellerList" class="movieItem">
            <span><a ng-href=#/movie/{{movies.id}}><img ng-src="resources/images/{{movies.id}}.jpg" alt="" class="img-responsive center-block" /></a></span>
        </li>
    </ul>
</div>
  </div>
</div>

<div ng-repeat= "favoriteMovies in topGenres">
<div class="panel panel-default panel-custom" style="background-color: black" ng-if ="favoriteMovies.length>0">
  <div class="panel-heading" >
    <h3 class="panel-title">{{favoriteMovies[0].type}}</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in favoriteMovies" class="movieItem">
            <span><a ng-href=#/movie/{{movies.id}}><img ng-src="resources/images/{{movies.id}}.jpg" alt="" class="img-responsive center-block" /></a></span>
        </li>
    </ul>
</div>
  </div>
</div>
</div>



</div>