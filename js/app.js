angular.module('BirdApp', ['ngRoute','RouteControllers']);


angular.module('BirdApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider

    .when("/", {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	}).
      when("/about", {
		templateUrl: 'templates/biography.html',
		controller: 'BiographyController'
	}).
      when("/song", {
		templateUrl: 'templates/music.html',
		controller: 'MusicController'
	}).
      when("/videos", {
		templateUrl: 'templates/videos.html',
		controller: 'VideoController'
	}).
      when("/events", {
		templateUrl: 'templates/events.html',
		controller: 'EventsController'
	}).
      when("/contact", {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	}).
      when("/accounts/register", {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});

});