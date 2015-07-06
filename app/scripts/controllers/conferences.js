'use strict';

/**
 * @ngdoc function
 * @name tenorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenorApp
 */

angular.module('tenorApp')
  .controller('ConferencesCtrl', function ($scope) {
    $scope.conferences = [
      {
        year : '2016',
        tag : 'Anglia Ruskin University, Cambridge, UK',
        img : 'http://placehold.it/750x150',
        date : 'May 27-29'
      },
      {
        year : '2015',
        tag : 'Université Paris-Sorbonne, IRCAM, Paris, France',
        img : 'http://placehold.it/750x150',
        date : 'May 28-30',
        cwebsite:'http://tenor2015.tenor-conference.org',
        pwebsite:'http://tenor2015.tenor-conference.org/TENOR2015-Proceedings.pdf',
        bibtex:'bibtex2015.bib'
      }
    ];
  });
