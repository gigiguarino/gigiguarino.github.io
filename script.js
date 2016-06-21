var app = angular.module('website', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
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
			redirectTo: '/about'
		});
}])
app.controller('mainController', ['$scope', function($scope){

}]);
app.controller('purseController', ['$scope', function($scope){

}]);
app.controller('headbandController', ['$scope', function($scope){

}]);
