(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.state = "hungry";

  $scope.sayMessage = function() {
    return "Yaakov likes to eat healthy snacks at night!";
  }

  $scope.feedGuy = function() {
    $scope.state = "fed";
  }

  $scope.starveGuy = function() {
    $scope.state = "hungry";
  }
}

})();
