Template.header.helpers({
  /**
   * Description
   * @method active
   * @param {} page
   * @return BinaryExpression
   */
  active: function (page) {
    var id = page.replace(/\//g,'');
    return id == Router.getData();
  },
  /**
   * Description
   * @method show_login
   * @return BinaryExpression
   */
  show_login: function () {
    return Router.route.name == 'login';
  },
  /**
   * Description
   * @method user
   * @return CallExpression
   */
  user: function () {
    return Meteor.user();
  }
});

Template.header.events({
  'click #primary-menu-btn': function () {
    $('.menu.animated').addClass('animate-in');
    $('body').addClass('hide-hints').toggleClass('menu-open primary-menu-open');
  }
});