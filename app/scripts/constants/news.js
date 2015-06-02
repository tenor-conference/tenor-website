'use strict';

angular.module('tenorApp')
  .constant('news', [
    {
      big:'Please fill me in',
      small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit mauris, lobortis convallis consequat ut, sodales quis orci.',
      person: 'TENOR official',
      postlink: 'please-fill-me-in',
      date:'May 24, 2015'
    },
    {
      big:'Here\'s some more news',
      small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar scelerisque orci, accumsan auctor elit sollicitudin et.',
      person:'Dominique Fober',
      postlink: 'more-info',
      date:'April 25, 2015'
    },
    {
      big:'You get the idea',
      small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ipsum at pharetra mattis. Nunc vulputate et lectus cursus euismod.',
      person:'Jean Bresson',
      postlink: 'get-the-idea',
      date:'March 25, 2015'
    }
  ]);
