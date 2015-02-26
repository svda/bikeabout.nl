Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
});

/**
 * Define all access rules here
 * @TODO Switch to roles
 */
Router.onBeforeAction(requireLogin, {
  only: [
    'TripLoggerAddLocation',
    'TripLoggerEditLocation',
    'TripLoggerAddTrack',
    'TripLoggerEditTrack'
  ]
});

Router.route('home', {
  path: '/',
  onBeforeAction: function () {
    SEO.title( 'Sander and Janneke pedal east' );
    SEO.description( 'In june 2014 we started cycling to South-East Asia. This is our travel log.' );
    this.next();
  }
});

Router.route('about', {
  onBeforeAction: function () {
    UsageTracker.track('About');
    SEO.title( 'About' );
    SEO.description( 'About us, our trip and our gear.' );
    this.next();
  }
});

Router.onAfterAction( function () {
  //c2o.Tracker.track(this.route.name);
  setTimeout(function () {
    $('.menu.animated').removeClass('animate-in');
  }, 300); //300 ms is the same delay needed for the css page fade transition
  
});