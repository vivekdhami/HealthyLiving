'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('SubscribersCtrl', function ($scope,$http,$modal) {

    $http.get('http://localhost:9000/subscribers.json').success(function(data){
      $scope.subscribers=data;
    });

    $scope.gridOptions={
      data:'subscribers',
      showGroupPanel:true,
      enableCellSelection:true,
      enableRowSelection:true,
      enableCellEdit:true,
      columnDefs:[
        {field:'no','displayName':'No.'},
        {field:'name',displayName:'Name'},
        {field:'userType',displayName:'Subscription Type'},
        {field:'loyalty',displayName:'Loyalty Score'},
        {field:'joinDate',displayName:'Date of Joining'}
      ]
    };

    $scope.showModal=function(){
      $scope.newuser={};

      var modalInstance=$modal.open({
        templateUrl:'views/add-user.html',
        controller:'AddNewUserCtrl',
        resolve:{
          newuser:function(){
            return $scope.newuser;
        }}
      });

      modalInstance.result.then(function(selectedItem){
        $scope.subscribers.push({
          no: $scope.subscribers.length+1,
          name: $scope.newuser.name,
          userType: $scope.newuser.userType,
          loyalty: $scope.newuser.loyalty,
          joinDate: $scope.newuser.joinDate
        });
      });

    };

  })

  .controller("AddNewUserCtrl",function($scope,$modalInstance,newuser){

$scope.newuser=newuser;

    $scope.saveNewuser=function(){
      $modalInstance.close(newuser);
    };

  $scope.cancel=function(){
    $modalInstance.dismiss('cancel');
  };
});
