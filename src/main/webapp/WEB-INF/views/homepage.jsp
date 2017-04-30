<div>
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li ng-repeat="movie in topMovies" data-target="#carousel-example-generic" data-slide-to="$index" ng-class='{active:$first}'></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div ng-repeat="movie in topMovies" class="item itemSlide" ng-class='{active:$first}'>
     <img ng-src="resources/images/{{movie}}.jpg" alt="Description" class="featuredImages" />
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


<div>


<div class="panel panel-default panel-custom">
  <div class="panel-heading">
    <h3 class="panel-title">Movie Queue</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in movieQ" class="movieItem">
            <span ng-href=#/movie/{{movies.id}}>{{movies.name}}</span>
        </li>
    </ul>
</div>
  </div>
</div>

<div class="panel panel-default panel-custom">
  <div class="panel-heading">
    <h3 class="panel-title">Your Personalized List</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in personalizedMovies" class="movieItem">
            <span>{{movies.name}}</span>
        </li>
    </ul>
</div>
  </div>
</div>

<div class="panel panel-default panel-custom">
  <div class="panel-heading">
    <h3 class="panel-title">Best Selling Movies</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in bestSellerList" class="movieItem">
            <span>{{movies.name}}</span>
        </li>
    </ul>
</div>
  </div>
</div>

<div ng-repeat= "favoriteMovies in topGenres">
<div class="panel panel-default panel-custom" ng-if ="favoriteMovies.length>0">
  <div class="panel-heading">
    <h3 class="panel-title">{{favoriteMovies[0].type}}</h3>
  </div>
  <div class="panel-body">
    <div class="movieList">
    <ul class="list-inline list-in">
        <li ng-repeat = "movies in favoriteMovies" class="movieItem">
            <span>{{movies.name}}</span>
        </li>
    </ul>
</div>
  </div>
</div>
</div>



</div>