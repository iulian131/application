angular.module("app", [])
.controller("appCtrl", function($scope){
	$scope.defaultValue = "Continut input";
	$scope.numar = 10;
	
	$scope.display = function(text){
		console.log(text);
	};
	
	$scope.generare = function(){
		$scope.numar = Math.floor(Math.random() * 100);
	};
});