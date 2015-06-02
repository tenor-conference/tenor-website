'use strict';

angular.module('tenorApp')
  .provider('data', [function () {
    var people = {
      'TENOR official' : {
        website: 'http://www.tenor-conference.org'
      },
      'Dominique Fober' : {
        website: 'http://www.grame.fr',
        steering: true,
        img : 'http://www.placehold.it/200x200',
        blurb : 'Dominique Fober knows the last digit of pi.'
      },
      'Jean Bresson' : {
        website : 'http://www.ircam.fr',
        steering: true,
        img : 'http://www.placehold.it/200x200',
        blurb : 'Every time Jean Bresson takes a blood test, he gets an A+.'
      },
      'Richard Hoadley' : {
        website : 'http://www.ircam.fr',
        steering: true,
        img : 'http://www.placehold.it/200x200',
        blurb : 'Richard Hoadley gets offered valet parking at Drive-Thrus.'
      },
      'Pierre Couprie' : {
        website : 'http://www.ircam.fr',
        steering: true,
        img : 'http://www.placehold.it/200x200',
        blurb : 'Lightning is too slow to strick Pierre Couprie.'
      },
      'Yann Geslin' : {
        website : 'http://www.ircam.fr',
        steering: true,
        img : 'http://www.placehold.it/200x200',
        blurb : 'Yann Geslin hitchhiked to the moon and walked at least half the way.'
      },
      'Mike Solomon' : {
        website: 'http://www.ensemble101.fr',
        steering: true,
        img : 'http://www.placehold.it/200x200',
        blurb : 'Mike Solomon can build a snowman out of rain.'
      }
    };
    for (var n in people) {
      people[n].name = n;
    }

    var news = [
      {
        big:'Please fill me in',
        small:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit mauris, lobortis convallis consequat ut, sodales quis orci.',
        person: people['TENOR official'],
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
