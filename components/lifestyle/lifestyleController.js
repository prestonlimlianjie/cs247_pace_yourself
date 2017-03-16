'use strict';

cs142App.controller('lifestyleController', ['$scope', '$routeParams', '$resource', '$rootScope', '$route', '$location',
  function ($scope, $routeParams, $resource, $rootScope, $route, $location) {
  	$scope.main.title = $scope.main.username + '\'s Favorites';

    $scope.likeButtonClick = function(photoObj_id){
    	console.log(photoObj_id);

    	var favoriteRes = $resource('/favoritePhoto/' + photoObj_id);
    	var photoModel = favoriteRes.save({}, function(){
        console.log("Favorite button clicked");
        $route.reload();

    	}, function errorHandling(err){
        console.log('Problem retrieving photoModel');
        return;
    	});

    };
}]);
