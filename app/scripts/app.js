'use strict';

angular.module('yeowebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider.when('/mainpage', {templateUrl: 'views/MainPage.html', controller: 'MainPageCtrl'});
    $routeProvider.when('/recipy/:id', {templateUrl: 'views/Recipy.html', controller: 'RecipyCtrl'});
    $routeProvider.when('/browse', {templateUrl: 'views/Browse.html', controller: 'BrowseCtrl'});
    $routeProvider.otherwise({redirectTo: '/mainpage'});
    
      
  });
