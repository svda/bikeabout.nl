Template.layout.rendered = function() {
  this.find('#shoji')._uihooks = {
    insertElement: function (node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function (node) {
      $(node).fadeOut(function () {
        $(this).remove();
      });
    }
  }
}

Template.layout.helpers({
  classes: function () {
    var route, str;
    str = '';
    route = Router && Router.current() && Router.current().route;
    if (route)
      str += 'view-' + route.getName();
    return str;
  }
});

Template.layout.events({
  'click #washi': function (e) {
    $('body').removeClass('menu-open');
    $('.menu.animated').removeClass('animate-in');
  }
});
