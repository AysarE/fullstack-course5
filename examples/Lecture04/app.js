(function () {

    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function($scope) {
        $scope.name = 'Aysar';
        $scope.sayHello = function () {
            return "Hello coursera";
        };
    });
    })();