app.controller('ActorModalCtrl', function ($scope, $uibModalInstance, items) {

	$scope.newActor= {};
	
	
  $scope.ok = function () {
	  $uibModalInstance.close($scope.newActor);
  };

  $scope.cancel = function () {
	  $uibModalInstance.dismiss('cancel');
  };
});