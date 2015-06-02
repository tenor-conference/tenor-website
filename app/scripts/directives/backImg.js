'use strict';

angular.module('tenorApp').directive('backImg', function(){
  return function(scope, element, attrs){
    attrs.$observe('backImg', function(value) {
      element.css({
        'background-image': 'url(' + value +')',
        'background-size' : 'cover',
        'background-repeat' : 'no-repeat',
        'width' : '100%',
        'padding' : '100px'
      });
    });
  };
});
