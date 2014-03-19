'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .service('RecipyService',['$http', function(ht) {
  	this.getAllRecipiesShort = function(callBackFunction) {
  		ht.get('recipies/frontRecipies.json').success(function(data) {
  					console.log("Following data return: " +  data);
  					callBackFunction(data);
  		});
	};
        
        this.getRecipiesList = function(callBackFunction) {
  		ht.get('recipies/RecipyList.json').success(function(data) {
  					console.log("fetching all recipies: " +  data);
  					callBackFunction(data);
  		});
	};
  }]);
