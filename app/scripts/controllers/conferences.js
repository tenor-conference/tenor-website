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
        date : 'May 27-29',
        cwebsite:'http://tenor2016.tenor-conference.org',
     },
      {
        year : '2015',
        tag : 'Université Paris-Sorbonne, IRCAM, Paris, France',
        img : 'http://placehold.it/750x150',
        date : 'May 28-30',
        cwebsite:'http://tenor2015.tenor-conference.org',
        pwebsite:'http://tenor2015.tenor-conference.org/TENOR2015-Proceedings.pdf',
        bibtex:'bibtex2015.bib',
		address: 'Paris, France',
		title: 'Proceedings of the First International Conference on Technologies for Music Notation and Representation - TENOR2015',
		editor: 'Marc Battier and Jean Bresson and Pierre Couprie and Cécile Davy-Rigaux and Dominique Fober and Yann Geslin and Hugues Genevois and François Picard and Alice Tacaille',
		publisher: 'Institut de Recherche en Musicologie',
		ISBN: '978-2-9552905-0-7'
      }
    ];
  });
