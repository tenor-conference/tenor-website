'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('SteeringCtrl', function ($scope, people) {
    $scope.people = [];
    for (var person in people) {
      if (people[person].steering) {
        var toPush = JSON.parse( JSON.stringify( people[person] ) );
        toPush.name = person;
        $scope.people.push(toPush);
      }
    }
  });
