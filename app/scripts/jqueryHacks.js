'use strict';

$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $('.navbar-collapse').hasClass('in');
    console.log('click', _opened);
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {
      $('button.navbar-toggle').click();
    }
  });
});
