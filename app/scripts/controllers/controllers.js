'use strict';

/* Controllers */

angular.module('yeowebApp').
controller('ertMainPageCtrl', function($scope, $http, $location) {
        console.log('is this working');
})
.controller('MainPageCtrl', function ($scope, $http) {
    var index = Math.floor(Math.random()*13)+1;
    var url = "url(../img/paper" + index + ".jpg)";
    console.log("Index: " + url);
    $scope.bgimage=url;
    
    index=0;
    $http.get('recipies/recipies.json').success(function(data) {
        console.log("Recipies" + data);
    	$scope.recipies = [];
        
        var lenOfArr = data.length;
        for (index; index<lenOfArr; index++) {
            var recipyName = data[index];
            console.log("rn " + recipyName);
            var name = recipyName + ".json";
            console.log("Recipy to fetch:" + name);
            $http.get('recipies/' + name).success(function(recipyData) {
                console.log("Recipy: ");
                console.log(recipyData)
                console.log("[" + recipyData + "]");
                if (recipyData!=='') {
                    $scope.recipies.push(recipyData);
                }
	   });
	}
    });
 });