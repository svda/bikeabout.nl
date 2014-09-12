Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map( function () {
  this.route('home', {
    path: '/',
    /**
     * Description
     * @method onBeforeAction
     * @return MemberExpression
     */
    onBeforeAction: function () {
      return this.route.name;
    },
    /**
     * Description
     * @method onRun
     * @return 
     */
    onRun: function () {
      SEO.title( 'Sander en Janneke pedal east' );
      SEO.description( 'In june 2014 we started a cycling adventure to South-East Asia. This is our travel log.' );
    }
  });
  this.route('about', {
    /**
     * Description
     * @method onRun
     * @return 
     */
    onRun: function () {
      SEO.title( 'About' );
      SEO.description( 'About us, our trip and our gear.' );
    }
  });
  this.route('login');
  this.route('404', {
    path: '*'
  });

});

/**
 * Description
 * @method requireLogin
 * @param {} pause
 * @return 
 */
var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {
  only: [
    'TripLoggerAddLocation',
    'TripLoggerEditLocation',
    'TripLoggerAddTrack',
    'TripLoggerEditTrack'
  ]
});

Router.onRun( function () {
  c2o.Tracker.track(this.route.name);
});