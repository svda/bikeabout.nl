Template.menu.helpers({
  items: function () {
    return [{
      path: '/about',
      title: 'About us'
    }, {
      path: '/map',
      title: 'Map'
    }, {
      path: '/travelogue',
      title: 'Travelogue'
    }];
  }
})

Template.menu.events({
  'click #primary-menu a': function (e) {
    $('body').removeClass('menu-open');
  }
});
