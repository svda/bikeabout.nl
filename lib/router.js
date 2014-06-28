Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

PageController = RouteController.extend({
  onRun: function () {
    c2o.Tracker.track(this.route.name);
  }
});

LoginPageController = PageController.extend({
  onRun: function () {
    window.App.state.showLoginButtons = true;
  },
  onStop: function () {
    window.App.state.showLoginButtons = false;
  }
});

Router.map( function () {
  this.route('home', {
    path: '/',
    onBeforeAction: function () {
      return this.route.name;
    },
    onRun: function () {
      SEO.title( 'Sander en Janneke pedal east' );
      SEO.description( 'In june 2014 we started a cycling adventure to South-East Asia. This is our travel log.' );
    }
  });
  this.route('about', {
    controller: PageController,
    onRun: function () {
      SEO.title( 'About' );
      SEO.description( 'About us, our trip and our gear.' );
    }
  });
  this.route('login', {
    controller: LoginPageController
  });
  this.route('404', {
    path: '*',
    controller: PageController
  });
 
  Router.onBeforeAction('loading');

});

