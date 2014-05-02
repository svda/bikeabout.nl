$.fn.crossfade = function (options) {

  var defaults = {
    container: $(this),
    interval: 7000
  }

  var options = $.extend(defaults, options);
  var $items = options.container.children('.item')
    , $current = $($items[0])
    , $next = false;

  function fade() {
    $next = $current.next().length ? $current.next() : $current.prevAll().last();
    $next.addClass('active');
    $current.removeClass('active');
    $current = $next;
  }

  Meteor.setInterval( function () {
    fade() }, options.interval
  )

}

Template.homeBackground.rendered = function () {
  $('.crossfade').crossfade();
};

Template.homeCountdown.helpers({
  countdown: function () {
    countdown();
    Meteor.setInterval(countdown, 1000);
    return Session.get('countdown_timer');
  }
});

// Helpers

function countdown () {
  var now = moment(),
  then = moment([2014, 6, 1]).subtract('months', 1);
  ms = then.diff(now, 'milliseconds', true);
  days = Math.floor(moment.duration(ms).asDays());
  then = then.subtract('days', days);
  ms = then.diff(now, 'milliseconds', true);
  hours = Math.floor(moment.duration(ms).asHours());
  then = then.subtract('hours', hours);
  ms = then.diff(now, 'milliseconds', true);
  minutes = Math.floor(moment.duration(ms).asMinutes());
  then = then.subtract('minutes', minutes);
  ms = then.diff(now, 'milliseconds', true);
  seconds = Math.floor(moment.duration(ms).asSeconds());
  Session.set( 'countdown_timer', { days: days, hours: hours, minutes: minutes, seconds: seconds } );
}
