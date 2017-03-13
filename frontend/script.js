
var numReq = 0;
var app = angular.module('myApp', [])
app.controller('mainCtrl', ['$scope','$http' , function ($scope, $http) {
    $scope.message = 'hello from Angular';

    $scope.send = function () {
        $http({
            method: 'GET',
            url: '/custom'
        }).then(function Success(res) {
            numReq++
            $scope.message = res.data;
            $scope.data.push({label:'added'+numReq, value:numReq});

        }, function error(resp) {
            console.log(resp);
        })
    }


    $scope.width = 500;
    $scope.height = 350;
    $scope.yAxis = 'Time';
    $scope.xAxis = 'number';

    // Data

    $scope.data = [
        {
            label: 'January',
            value: 36
        },
        {
            label: 'February',
            value: 54
        },
        {
            label: 'March',
            value: 62
        },
        {
            label: 'April',
            value: 82
        },
        {
            label: 'May',
            value: 96
        },
        {
            label: 'June',
            value: 111
        },
        {
            label: 'July',
            value: 122
        },
        {
            label: 'August',
            value: 152
        },
        {
            label: 'September',
            value: 176
        },
        {
            label: 'October',
            value: 180
        },
        {
            label: 'November',
            value: 252
        },
        {
            label: 'December',
            value: 342
        }
    ];

    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    $scope.max = 0;

    var arrLength = $scope.data.length;
    for (var i = 0; i < arrLength; i++) {
        // Find Maximum X Axis Value
        if ($scope.data[i].value > $scope.max)
            $scope.max = $scope.data[i].value;
    }

}])