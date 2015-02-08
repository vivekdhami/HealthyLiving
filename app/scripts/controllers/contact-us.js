'use strict';


angular.module('healthyLivingApp')
  .controller('ContactUsCtrl', ['$scope',function ($scope) {

    $scope.submitForm = function (isValid) {
      if (isValid) {
        alert('All is well');
      }
    };

  }]);
