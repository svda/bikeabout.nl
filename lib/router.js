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
    controller: PageController,
    onRun: function () {
      SEO.title( 'Cycling is what we do' );
      SEO.description( 'The increased complexity of the internet makes every large web project a piece of art. I am trying to master the art of web development. This means I care about my craft, and I think about my work.' );
    }
  });
  this.route('about', {
    path: '/about',
    controller: PageController,
    onRun: function () {
      SEO.title( 'About me' );
      SEO.description( '' );
    }
  });
  this.route('login', {
    path: '/login',
    controller: LoginPageController
  });
  this.route('404', {
    path: '*',
    controller: PageController
  });
 
  Router.onBeforeAction('loading');

});

