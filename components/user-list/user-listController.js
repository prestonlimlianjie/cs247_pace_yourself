'use strict';

cs142App.controller('UserListController', ['$scope', '$resource',
    function ($scope, $resource) {

        $scope.main.title = 'Users';
        $scope.userList = '';

        // $scope.FetchModel('/user/list', function(json_str){ 
        // 	$scope.$apply(function(){
        //     $scope.userList = json_str;
        // });
    // });
    var userListRes = $resource("/user/list");
    var userListModel = userListRes.query({}, function () {
      $scope.userList = userListModel;
      }, function errorHandling(err) { 
      console.log('Problem retrieving userListModel');
    });

    }]);

