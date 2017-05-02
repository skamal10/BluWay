<h1>{{actor.name}}</h1>
<uib-rating ng-model="actorRating" max="max" read-only="isReadonly" on-hover="hoveringOver(data)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></uib-rating>
<br>
<br>
<br>
<ul id="image-list" class="row row-eq-height no-bullets">
    <li ng-repeat="movie in movies" class="col-md-3 addMore"><img ng-src="resources/images/{{movie.id}}.jpg" class="img-responsive"><p class="movieName">{{movie.name}}</p></li>
</ul>