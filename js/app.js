var BandApp = angular.module('BandApp', ['RouteControllers']);



BandApp.config(['$routeProvider',

  function($routeProvider) {

    $routeProvider.


    when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	}).
      when('/biography', {
		templateUrl: 'templates/biography.html',
		controller: 'BiographyController'
	}).
      when('/music', {
		templateUrl: 'templates/music.html',
		controller: 'MusicController'
	}).
      when('/videos', {
		templateUrl: 'templates/videos.html',
		controller: 'VideoController'
	}).
      when('/events', {
		templateUrl: 'templates/events.html',
		controller: 'EventsController'
	}).
      when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	}).
      when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});

}]);