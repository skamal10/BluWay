'use strict';

app.controller('MovieStatsCtrl', function ($scope,$http, $routeParams) {
	$scope.view_tab= true;
	
	$scope.changeTab = function(tab) {
	    $scope.view_tab = tab;
	}

  });