'use strict';

/* Controllers */

angular.module('yeowebApp').
controller('ertMainPageCtrl', function($scope, $http, $location) {
        console.log('is this working');
})
.controller('MainPageCtrl', function ($scope, $http, $location) {
    var index = Math.floor(Math.random()*13)+1;
    var url = "url(../img/paper" + index + ".jpg)";
    console.log("Index: " + url);
    $scope.bgimage=url;
    
    index=0;
    $http.get('recipies/frontRecipies.json').success(function(data) {
        console.log("Recipies" + data);
    	$scope.recipies = [];
        
        var lenOfArr = data.length;
        for (index; index<lenOfArr; index++) {
            var recipyName = data[index];
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
     
     $scope.showRecipy=function(id) {
        console.log("loading: " + id);
        $location.path('/recipy/' + id);
     };
 })
 .controller('RecipyCtrl', function($scope, $http, $route) {
          var name = $route.current.params.id + ".json";
          $http.get('recipies/' + name).success(function(recipyData) {
                        console.log("Recipy: ");
                        if (recipyData!=='') {
                            $scope.recipy=recipyData;
                        }
          });
          
          $scope.clickIngredients=function() {
              console.log("Clicking INgredients")
              $scope.showIngredients=true;
              $scope.showDirections=false;
          }
  })
  .controller('BrowseCtrl', function($scope,$http) {
        console.log("Browsing");
        $scope.menu.items = ['Home'];
        $http.get('recipies/RecipyList.json').success(function(data) {
            console.log("load all recipies" + data);
            $scope.recipies = [];
        
            var lenOfArr = data.length, index=0;
            for (index; index<lenOfArr; index++) {
                var recipyData = data[index];
                $scope.recipies.push(recipyData);
            }
      });
  })
  .controller('menuController', function($scope, $location) {
      console.log("Using the menu controller")
      $scope.menu = {
          items : ['Browse']
      };
      $scope.setHomeMenu = function() {
          $scope.meun.items = ["Home"]
      }
      $scope.loadPage = function(path) {
          $location.path(path.toLowerCase());
      }
  });
  