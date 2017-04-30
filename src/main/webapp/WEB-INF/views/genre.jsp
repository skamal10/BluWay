<h1>{{type}}</h1>
<br>
<br>
<br>
<ul id="image-list" class="row row-eq-height no-bullets">
    <li ng-repeat="movie in movies" class="col-md-3 addMore"><img ng-src="resources/images/{{movie.id}}.jpg" class="img-responsive"><p class="movieName">{{movie.name}}</p></li>
</ul>