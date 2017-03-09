var app = angular.module('website', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html'
		})
		.when('/about', {
			templateUrl: 'about.html'
		})
		.when('/classes', {
			templateUrl: 'classes.html'
		})
		.when('/games', {
			templateUrl: 'games.html'
		})
		.when('/contact', {
			templateUrl: 'contact.html'
		})
		.when('/artwork', {
			templateUrl: 'artwork.html'
		})
		.when('/mac-help', {
			templateUrl: 'mac-help.html'
		})
		.when('/windows-help', {
			templateUrl: 'windows-help.html'
		})
		.otherwise( {
			redirectTo: '/home'
		});
}])

app.controller('main-controller', ['$scope', function($scope){
}]);

app.controller('art-controller', ['$scope', function($scope){
	$scope.purses1 = ['purse1', 'purse2', 'purse3', 'purse4', 'purse5'];
	$scope.purses2 = ['purse6', 'purse7', 'purse8', 'purse9', 'purse10'];
	$scope.embroideries1 = ['embroidery1', 'embroidery2', 'embroidery3', 'embroidery4', 'embroidery5', 'embroidery6', 'embroidery7', 'embroidery8', 'embroidery9', 'embroidery19'];
	$scope.embroideries2 = ['embroidery10', 'embroidery11', 'embroidery12', 'embroidery13', 'embroidery14', 'embroidery15', 'embroidery16', 'embroidery17', 'embroidery18'];
	$scope.headbands1 = ['headband1', 'headband2', 'headband3', 'headband4', 'headband5', 'headband6', 'headband7'];
	$scope.headbands2 = ['headband9', 'headband10', 'headband11', 'headband12', 'headband13', 'headband14', 'headband15', 'headband8'];
}]);

