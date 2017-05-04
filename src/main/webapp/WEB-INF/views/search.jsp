<div>

<div class="jumbotron text-center">
  <h1>Search </h1>
  
</div>

<form class="form-inline" role="form">

 <div class="form-group">
    <label><i class="fa fa-globe"></i> Search by Movie Names</label>
    <input placeholder= "Enter name"  type="text" ng-model="selectedMovie" uib-typeahead="movie as movie.name for movie in movies | filter:{name:$viewValue} | limitTo:8" class="form-control">
 	<button ng-click ="redirectMovie()">Search Movie</button>
  </div>
  </form>
</div>
