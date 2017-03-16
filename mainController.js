'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial', 'ngResource']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            // when('/users', {
            //     templateUrl: 'components/user-list/user-listTemplate.html',
            //     controller: 'UserListController'
            // }).
            when('/playvideonext', {
                templateUrl: 'components/play-video-next/play-video-nextTemplate.html',
                controller: 'PlayVideoNextController'
            }).
            when('/exercise', {
                templateUrl: 'components/exercise/exerciseTemplate.html',
                controller: 'ExerciseController'
            }).
            when('/playvideo', {
                templateUrl: 'components/play-video/play-videoTemplate.html',
                controller: 'PlayVideoController'
            }).
            when('/savedvideos', {
                templateUrl: 'components/saved-videos/saved-videosTemplate.html',
                controller: 'SavedVideosController'
            }).
            when('/categories', {
                templateUrl: 'components/categories/categoriesTemplate.html',
                controller: 'CategoriesController'
            }).
            when('/hostatalk', {
                templateUrl: 'components/hostatalk/hostatalkTemplate.html',
                controller: 'HostATalkController'
            }).
            when('/home', {
                templateUrl:'components/home/homeTemplate.html',
                controller: 'HomeController'
            }).
            otherwise({
                templateUrl:'components/home/homeTemplate.html',
                controller: 'HomeController'
            });

    }]);

cs142App.controller('MainController', ['$scope', '$resource', '$rootScope', '$location', '$http', '$route',
    function ($scope, $resource, $rootScope, $location, $http, $route) {

        $scope.main = {};
        $scope.main.title = '';
        // $scope.main.version = '0';
        // $scope.main.loggedIn = true;
        // $scope.main.username = '';

        // $rootScope.$on("$routeChangeStart", function(event, next, current) {
        //     if (!$scope.main.loggedIn) {
        //         // no logged user, redirect to /login-register unless already there
        //         if (next.templateUrl !== "components/login-register/login-registerTemplate.html") {
        //             $location.path("/login-register");
        //         }
        //     }

        // });

        // $scope.$on('Login', function(event, userModel){
        //     $scope.main.username = userModel.first_name + ' ' + userModel.last_name;
        //     $location.path("/user/list");
        //     $location.path("users/" + userModel._id);
        // });


        //
        //
        //
        //

      //   var selectedPhotoFile;   // Holds the last file selected by the user

      //   // Called on file selection - we simply save a reference to the file in selectedPhotoFile
      //   $scope.inputFileNameChanged = function (element) {
      //       selectedPhotoFile = element.files[0];
      //   };

      //   // Has the user selected a file?
      //   $scope.inputFileNameSelected = function () {
      //       return !!selectedPhotoFile;
      //   };

      //   // Upload the photo file selected by the user using a post request to the URL /photos/new
      //   $scope.uploadPhoto = function () {
      //       if (!$scope.inputFileNameSelected()) {
      //           console.error("uploadPhoto called with no selected file");
      //           return;
      //       }
      //       console.log('fileSubmitted', selectedPhotoFile);

      //       // Create a DOM form and add the file to it under the name uploadedphoto
      //       var domForm = new FormData();
      //       domForm.append('uploadedphoto', selectedPhotoFile);

      //       // Using $http to POST the form
      //       $http.post('/photos/new', domForm, {
      //           transformRequest: angular.identity,
      //           headers: {'Content-Type': undefined}
      //       }).success(function(newPhoto){
      //           console.log("Photo upload successful");
      //           $route.reload();
      //           // The photo was successfully uploaded. XXX - Do whatever you want on success.
      //       }).error(function(err){
      //           // Couldn't upload the photo. XXX  - Do whatever you want on failure.
      //           console.error('ERROR uploading photo', err);
      //       });

      //   };


      // $scope.logoutButtonClick = function(buttonName){
      //   var logoutRes = $resource('/admin/logout');
      //   logoutRes.save({login_name: $scope.main.username}, function () {
      //     // Success
      //     console.log("Logout successful");
      //     $scope.main.loggedIn = false;
      //     $scope.errormsg = '';
          
      //     // Broadcast to route to login page
      //     $rootScope.$broadcast('Logout');
            
      //   }, function errorHandling(err) { 
      //     console.log(err);
      //     console.log('Logout failed');
      //       // Any error or non-OK status
      //   });  
      // };

      // $scope.favoritesButtonClick = function(buttonName){
      //   $location.path("favorites");
      // };

      //   $scope.$on('Logout', function(event, args){
      //       $scope.main.username = '';
      //       $location.path("/login-register");
      //   });

    }]);
