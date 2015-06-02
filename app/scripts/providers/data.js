'use strict';

angular.module('tenorApp')
  .provider('data', [function () {
    var people = {
      'Mike Solomon' : {
        website: 'http://www.ensemble101.fr'
      },
      'Dominique Fober' : {
        website: 'http://www.grame.fr'
      },
      'Jean Bresson' : {
        website : 'http://www.ircam.fr'
      }
    };
    for (var n in people) {
      people[n].name = n;
    }

    var news = [
      {
        big:'Please fill me in',
        small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit mauris, lobortis convallis consequat ut, sodales quis orci.',
        person: people['Mike Solomon'],
        postlink: 'please-fill-me-in',
        date:'May 24, 2015'
      },
      {
        big:'Here\'s some more news',
        small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar scelerisque orci, accumsan auctor elit sollicitudin et.',
        person:people['Dominique Fober'],
        postlink: 'more-info',
        date:'April 25, 2015'
      },
      {
        big:'You get the idea',
        small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ipsum at pharetra mattis. Nunc vulputate et lectus cursus euismod.',
        person:people['Jean Bresson'],
        postlink: 'get-the-idea',
        date:'March 25, 2015'
      }
    ];

    this.data = {};
    this.data.news = news;
    this.data.people = people;
    var data = this.data;

    this.$get = function() {
      return data;
    };

  }]);
