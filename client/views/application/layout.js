Template.layout.helpers({
  currentView: function () {
    if( Router.current() !== null )
      return name = Router.current().route.name;
  }
});

Template.layout.events({
  'click #main-overlay': function (e) {
    $('body').removeClass('menu-open');
  }
});