'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('SteeringCtrl', function ($scope, data) {
    $scope.people = [];
    for (var person in data.people) {
      if (data.people[person].steering) {
        $scope.people.push(data.people[person]);
      }
    }
  });
