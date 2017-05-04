<h1>{{type}}</h1>
<br>
<br>
<br>
<ul id="image-list" class="row row-eq-height no-bullets">
    
    <span><a ng-href=#/movie/{{movies.id}}><img ng-src="resources/images/{{movies.id}}.jpg" alt="" class="img-responsive center-block" /></a></span>
    <li ng-repeat="movie in movies" class="col-md-3 addMore"><span><a ng-href=#/movie/{{movies.id}}><img ng-src="resources/images/{{movie.id}}.jpg" class="img-responsive"></a></span></li>
</ul>