
var app = angular.module("MyApp", []);

app.run(function ($rootScope) {
    $rootScope.users = [];
});

app.controller("RegCtrl", function($scope, $rootScope){
    $scope.rform = {};
    $scope.regSubmit = function(){
        var tmp = {};
        tmp.fname = $scope.rform.fname;
        tmp.lname = $scope.rform.lname;
        tmp.uname = $scope.rform.uname;
        tmp.passw = $scope.rform.passw;
        $rootScope.users.push(tmp);
        console.log($rootScope.users);
    }
});

app.controller("LogCtrl", function($scope, $window, $rootScope){
    $scope.lform = {};
    $scope.logSubmit =  function(){
        console.log($rootScope.users);
    }
});
