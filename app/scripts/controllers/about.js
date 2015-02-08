'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
