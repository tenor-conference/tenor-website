'use strict';

angular.module('tenorApp')
  .constant('people', {
      'TENOR official' : {
        website: 'http://www.tenor-conference.org'
      },
      'Jean Bresson' : {
        website : 'http://www.ircam.fr',
        steering: true,
        affiliation: 'IRCAM-CNRS UMR STMS',
        img : 'http://www.placehold.it/200x200',
        blurb : 'Every time Jean Bresson goes through a blood test, he gets an A+.'
      },
      'Pierre Couprie' : {
        website : 'http://www.ircam.fr',
        steering: true,
        affiliation: 'IReMus Université Paris-Sorbonne',
        img : 'http://www.placehold.it/200x200',
        blurb : 'Lightning is too slow to strick Pierre Couprie.'
      },
      'Dominique Fober' : {
        website: 'http://www.grame.fr',
        steering: true,
        affiliation: 'GRAME',
        img : 'http://www.placehold.it/200x200',
        blurb : 'Dominique Fober knows the last digit of pi.'
      },
      'Yann Geslin' : {
        website : 'http://www.ircam.fr',
        steering: true,
        affiliation: 'INA-GRM',
        img : 'http://www.placehold.it/200x200',
        blurb : 'Yann Geslin hitchhiked to the moon and walked at least half the way.'
      },
      'Richard Hoadley' : {
        website : 'http://www.ircam.fr',
        steering: true,
        affiliation: 'Anglia Ruskin University',
        img : 'http://www.placehold.it/200x200',
        blurb : 'Richard Hoadley gets offered valet parking at Drive-Thrus.'
      },
      'Mike Solomon' : {
        website: 'http://www.ensemble101.fr',
        steering: true,
        affiliation: 'ensemble 101',
        img : 'http://www.placehold.it/200x200',
        blurb : 'Mike Solomon can build a snowman out of rain.'
      }
    });
