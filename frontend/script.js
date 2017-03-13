var numReq = 2;
var app = angular.module('myApp', [])
app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = 'hello from Angular';
    $scope.path = '/custom';
    $scope.typeOfRequest = 'GET';

    $scope.send = function () {
        var date = new Date()
        $http({
            method: $scope.typeOfRequest,
            url: $scope.path
        }).then(function Success(res) {
            var curDate = new Date()
            numReq++


            $scope.message = res.data;
            $scope.data.push({label: 'Example #' + numReq + ' ' + $scope.typeOfRequest, value: curDate - date});

        }, function error(resp) {
            console.log(resp);
        })
    }


    $scope.width = 500;
    $scope.height = 350;
    $scope.yAxis = 'Time of request(ms)';
    $scope.xAxis = 'Number of request';

    // Data

    $scope.data = [{

        label: 'First example GET',
        value: 7
    },
        {
            label: 'Second example POST',
            value: 20
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