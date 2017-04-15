'use strict';

angular.module('bluWay', []).controller('MovieCtrl', function ($scope) {
   
$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];

loadMovies();

$scope.loadMovies = function(){

	$http({
          method  : 'GET',
          url     : '/movie/all',
         })
          .success(function(data) {
          		alert(data.status);
          });
};

$scope.display = true;

  });


