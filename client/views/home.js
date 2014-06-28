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

  Meteor.setInterval( function () { fade() }, options.interval );

}

Template.homeBackground.rendered = function () {
  $('.crossfade').crossfade();
};

Template.home.events({
  'click a.anchor': function (e) {
    e.preventDefault();
    var target = $(e.currentTarget).attr("href");
    console.log(target);
    var destination = $(target).offset().top;
    $("#shoji").animate({
        scrollTop: destination
    }, 300, 'swing' );
    return false;
  }
});