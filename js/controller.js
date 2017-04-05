angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {

        $scope.title = "Welcome to Sale's Friday Bird Group Website!"
        console.log("HomeController: I was instantiated!")

    })

    .controller('BiographyController', function($scope) {

        $scope.title = "About Sale's Bird Group"
        console.log("AboutController: I was instantiated!")

    })

    .controller('MusicController', function($scope) {

        $scope.title = "Listen to some bird song"
        console.log("MusicController: I was instantiated!")

    })

    .controller('VideoController', function($scope) {

        $scope.title = "Watch some videos"
        console.log("VideoController: I was instantiated!")

    })

    .controller('EventsController', function($scope) {

        $scope.title = "Some events Sale Bird Group have taken part in"
        console.log("EventController: I was instantiated!")

    });