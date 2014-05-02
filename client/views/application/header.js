Template.header.helpers({
  active: function (page) {
    var id = page.replace(/\//g,'');
    return id == Router.getData();
  },
  show_login: function () {
    return Router.route.name == 'login';
  },
  user: function () {
    return Meteor.user();
  }
});

Template.header.events({
  'click #primary-menu-btn': function (e) {
      $('body').toggleClass('menu-open primary-menu-open');
  }
});