angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {

        $scope.title = "Welcome to Sale's Friday Bird Group Website!"

    })

    .controller('AboutController', function($scope) {

        $scope.title = "About Sale's Bird Group"

    })

    .controller('MediaController', function($scope) {

        $scope.title = "Sale Bird Group Media"
        $scope.info = "See some of the birds we've seen, listen to some bird song and watch some videos!"

    })

    .controller('RegisterController', function($scope) {
        
       $scope.title = "Register for our weekly round up newsletter!"

        $scope.registrationUser = {}

        $scope.submitForm = function(){
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
           } 
            console.log($scope.registrationUser.username);
        }

    })

    .controller('EventsController', function($scope) {

        $scope.title ="Some events Sale Bird Group have taken part in"
    })

    .controller('ContactController', function($scope) {

        $scope.title = "Contact Us!"
        $scope.info = "For more information, fill out the form and we will get in touch!"

        $scope.contactUser = {}

        $scope.submitForm = function(){
            if ($scope.contactForm.$valid) {
                $scope.contactUser.name = $scope.contact.name;
                $scope.contactUser.email = $scope.contact.email;
                $scope.contactUser.number = $scope.contact.number;
                $scope.contactUser.day = $scope.contact.day;
            }
            console.log($scope.contactUser.name + " " + $scope.contactUser.email + " " + $scope.contactUser.number + " " + $scope.contactUser.day);
        }
    });