'use strict';

angular.module('bluWay', []).controller('MovieCtrl', function ($scope,$http) {
   
$scope.movies = [];

$scope.loadMovies = function(){

	$http({
          method  : 'GET',
          url     : '/blu-way/movie/all',
         })
          .success(function(data) {
          		$scope.movies = data.slice();
          });
};

$scope.loadMovies();

$scope.display = true;

  });


