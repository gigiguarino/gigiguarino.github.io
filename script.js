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

app.controller('main-controller', ['$scope', function($scope){
}]);

app.controller('purse-controller', ['$scope', function($scope){
	$scope.currentNum = 0;
	$scope.purse = "http://i66.tinypic.com/2z525cj.jpg";

	function update(){
		alert($scope.currentNum);
		switch($scope.currentNum)
		{
			case 0:
				$scope.purse = "http://i66.tinypic.com/2z525cj.jpg";
				break;
			case 1:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_0041_zpsyfvak7el.jpg";
				break;
			case 2:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/image1-9_zps7ydyhyue.jpg";
				break;
			case 3:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_3839_zpsectclpgi.jpg";
				break;
			case 4:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_2052_zpsxdqnwjbr.jpg";
				break;
			case 5:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/image2-4_zpsqzccovg9.jpg";
				break;
			case 6:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_3840_zpsf7c1l0ru.jpg";
				break;
			case 7:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_0040_zps2tmv3xmd.jpg";
				break;
			case 8:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/image3-2_zpsaomdkr8j.jpg";
				break;
			case 9:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_3838_zpsnjvonwlq.jpg";
				break;
			case 10:
				$scope.purse = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_3841_zpsnpqokcwa.jpg";
				break;
			default:
				break;
		}
	}

	$scope.next = function next(){
		if ($scope.currentNum == 10){
			$scope.currentNum = 0;
		}
		else {
			$scope.currentNum = $scope.currentNum + 1;
		}

		update();
	}

	$scope.previous = function previous(){
		if ($scope.currentNum == 0){
			$scope.currentNum = 10;
		}
		else {
			$scope.currentNum = $scope.currentNum - 1;
		}

		update();
	}
}]);

app.controller('headband-controller', ['$scope', function($scope){
	$scope.currentNum = 0;
	$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1809_2_2_zpsvifrfyoy.jpg";

	function update(){
		switch($scope.currentNum)
		{
			case 0:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1809_2_2_zpsvifrfyoy.jpg";
				break;
			case 1:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1806_zpsxqobo783.jpg";
				break;
			case 2:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1846_2_2_zpsaamul8ma.jpg";
				break;
			case 3:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1733_2_zpsxl0orjwy.jpg";
				break;
			case 4:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1331_2_2_zpshodgjtkk.jpg";
				break;
			case 5:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1744_3_zpsoxcy8ieg.jpg";
				break;
			case 6:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1775_3_zpsyodpizzo.jpg";
				break;
			case 7:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1727_2_zpsr10vm9k1.jpg";
				break;
			case 8:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1432_zpsmuezwsdi.jpg";
				break;
			case 9:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1663_3_zpspsndyqse.jpg";
				break;
			case 10:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1731_3_zpsdy92ggur.jpg";
				break;
			case 11:
				$scope.headband = "http://i900.photobucket.com/albums/ac202/gabrielleguarino/IMG_1670_3_zpskdxzvejq.jpg";
				break;
			default:
				break;
		}
	}

	$scope.next = function next(){
		if ($scope.currentNum == 11){
			$scope.currentNum = 0;
		}
		else {
			$scope.currentNum = $scope.currentNum + 1;
		}

		update();
	}

	$scope.previous = function previous(){
		if ($scope.currentNum == 0){
			$scope.currentNum = 11;
		}
		else {
			$scope.currentNum = $scope.currentNum - 1;
		}

		update();
	}
}]);
