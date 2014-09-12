Template.layout.helpers({
  /**
   * Description
   * @method currentView
   * @return 
   */
  currentView: function () {
    if( Router.current() !== null )
      return Router.current().route.name;
  }
});

Template.layout.events({
  /**
   * Description
   * @param {} e
   * @return 
   */
  'click #main-overlay': function (e) {
    $('body').removeClass('menu-open');
  }
});