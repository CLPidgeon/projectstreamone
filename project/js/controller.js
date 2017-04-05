angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {

        $scope.title = "Welcome to Sale's Friday Bird Group Website!"

    })

    .controller('BiographyController', function($scope) {

        $scope.title = "About Sale's Bird Group"

    })

    .controller('MediaController', function($scope) {

        $scope.title = "Sale Bird Group Media"
        $scope.info = "See some of the birds we've seen, listen to some bird song and watch some videos!"

    })

    .controller('EventsController', function($scope) {

        $scope.title ="Some events Sale Bird Group have taken part in"

    .controller('ContactController', function($scope){
       $scope.title = "Contact Us!"
        $scope.info = "For more information, fill out the form and we will be in touch!"
    })

    .controller('RegisterController', function($scope){
        $scope.title = "Register for our weekly round up newsletter"
    })

    });