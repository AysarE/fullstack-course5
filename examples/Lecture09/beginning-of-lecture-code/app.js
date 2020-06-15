(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter, $injector) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var doUpperCase = $filter('uppercase');
    $scope.name = doUpperCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

function AnnotateMe(name, job, blah) {
  return "Blah!";
}

console.log(AnnotateMe());

})();
