var numReq = 2;
var app = angular.module('myApp', ['pascalprecht.translate']);
app.controller('mainCtrl', ['$translate', '$scope', '$http', function ($translate, $scope, $http) {
    $scope.message = 'hello from Angular';
    $scope.path = '/custom';
    $scope.typeOfRequest = 'GET';
    $scope.color=function (type) {
        if (type == "GET"){
            return 'darkred'
        }
        else { return 'forestgreen'}
    }

    $scope.send = function () {
        var date = new Date()
        $http({
            method: $scope.typeOfRequest,
            url: $scope.path
        }).then(function Success(res) {
            var curDate = new Date()
            numReq++


            $scope.message = res.data;
            $scope.data.push({
                label: 'Example #' + numReq,
                type: $scope.typeOfRequest,
                value: curDate - date,
                color: $scope.color($scope.typeOfRequest)
            })
            ;

        }, function error(resp) {
            console.log(resp);
            alert(resp.data);
        })
    }


    $scope.width = 500;
    $scope.height = 350;

    // Data

    $scope.data = [{

        label: 'First example',
        value: 7,
        type: 'GET',
        color: 'darkred'

    },
        {
            label: 'Second example',
            value: 20,
            type: 'POST',
            color: 'forestgreen'
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

    $scope.lang = 'ua';
    $scope.changeLang = function () {
        $translate.use($scope.lang)
    };
    $scope.showTable = false;
    $scope.toggleTable = function () {
        switch ($scope.showTable) {
            case (true):
                $scope.showTable = false;
                break;

            case (false):
                $scope.showTable = true;
                break;


        }
    }

}])