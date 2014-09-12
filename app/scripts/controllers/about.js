'use strict';

/**
 * @ngdoc function
 * @name honorarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the honorarApp
 */
angular.module('honorarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
