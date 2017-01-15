angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {

        $scope.title = "Swing/Jive Band Website!"

    })

    .controller('BiographyController', function($scope) {

        $scope.title = "Swing/Jive Band Biography!"

    })

    .controller('MusicController', function($scope) {

        $scope.title = "Browse through our back catalogue"

        $scope.link = "Buy from iTunes store"

    })

    .controller('VideoController', function($scope) {

        $scope.title = "Swing/Jive Band Video Page!"

    })

    .controller('EventsController', function($scope) {

        $scope.title = "Swing/Jive Band Events Page!"

    })

     .controller('ContactController', function($scope) {

        $scope.title = "Get Swing/Jive Band to play at your event!"

        $scope.info = "Fill in the contact form below for further information and a quote"

    }).controller('RegisterController', function($scope, UserAPIService) {

       $scope.title = "Welcome to Swing/Jive band's members page!"

        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth", $scope.data).then(function(results) {
                $scope.token - results.data.token;
                console.log($scope.token);
            }).catch(function(err){
                console.log(err.data);
            });
        }
                $scope.submitForm = function () {
                    if($scope.registrationForm.$valid) {
                        $scope.registrationUser.username = $scope.user.username;
                        $scope.registrationUser.password = $scope.user.password;

                        UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                            $scope.data = results.data;
                            alert("You have successfully registered to Swing/Jive band");
                            $scope.login();
                        }).catch(function(err){
                            alert("Ooops! Somthing went wrong!");
                            console.log(err);
                        });
                    }
                }
    });

   