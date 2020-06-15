(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchList = "";
      $scope.message = "";

      $scope.checkLunchSize = function () {

        if ($scope.lunchList.length == 0)
        {
            $scope.message = "Please enter data first";
        }
        else
        {
            var lunchArray = $scope.lunchList.split(",");

            if (lunchArray.length > 3)
            {
                $scope.message = "Too much!";
            }
            else
            {
                $scope.message = "Enjoy!";
            }
        }
      };
    }
    
    })();
    