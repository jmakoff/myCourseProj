var app = angular.module('myApp', [])
app.controller('mainCtrl', ['$scope','$http' , function ($scope, $http) {
    $scope.message = 'hello from Angular';
    $scope.send = function () {
        $http({
            method: 'GET',
            url: '/custom'
        }).then(function Success(res) {
            $scope.message = res.data;

        }, function error(resp) {
            console.log(resp);
        })
    }
}])