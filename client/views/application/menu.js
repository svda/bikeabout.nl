Template.menu.events({
  /**
   * Description
   * @param {} e
   * @return 
   */
  'click #primary-menu a': function (e) {
    $('body').removeClass('menu-open');
  }
});
