(function() {
  var app = angular.module('tutorialApp');

  app.controller('TutorialController', ['$http', function($http){
	var tutorials = this;
	tutorials.things = [];
	
	$http.get('/tutorials.json').success(function(data){tutorials.things = data;
	})
	
  });
)]);