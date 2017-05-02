'use strict';

app.controller('GenreCtrl', function ($scope,$http, $routeParams) {
  var viewGenres = {};
  viewGenres['horror'] = "Horror";
  viewGenres['comedy'] = "Comedy";
  viewGenres['drama'] = "Drama";
  viewGenres['adventure'] = "Adventure";
  viewGenres['romance'] = "Romance";
  viewGenres['family'] = "Family";
 
  $scope.type= viewGenres[$routeParams.type];
	
	
	var loadMoviesByGenre = function(){

		$http({
	          method  : 'GET',
	          url     : 'movie/type/'+$scope.type
	         })
	          .success(function(data) {
	          		if(data!=null){
	          			$scope.movies = data;
	          		}
	          });
	};
	var init = function(){
		loadMoviesByGenre();
	}

	init();

  });


