var scriptLoaded = false,
    commentsShown = false;

/**
 * Description
 * @method rendered
 * @return 
 */
Template.tumblrFeedPost.rendered = function () {
  commentsShown = false;
  if(!scriptLoaded) {
    loadScript();
  }
  else {
    resetScript();
  }

  /**
   * Description
   * @method loadScript
   * @return 
   */
  function loadScript () {
    var thread = $('<div id="disqus_thread">').appendTo('article.post');
    var disqus_shortname = Meteor.settings.public.disqus.shortname; // required: replace example with your forum shortname
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    scriptLoaded = true;
    commentsShown = true;
  }

  /**
   * Description
   * @method resetScript
   * @return 
   */
  function resetScript() {
    DISQUS.reset({
      reload: true,
      /**
       * Description
       * @method config
       * @return 
       */
      config: function () {  
        this.page.identifier = Meteor.settings.public.disqus.shortname;  
        this.page.url = "http://example.com/#!newthread";
      }
    });
  }

  $(document).on('scroll', function (e) {
    if(UI.isScrolledIntoView('.comments') && !commentsLoaded) {
      update();
    }
  });
};

Template.layout.events({
  /**
   * Description
   * @param {} e
   * @return 
   */
  'click #washi': function (e) {
    $('body').removeClass('menu-open');
  }
});

/**
 * Description
 * @method rendered
 * @return 
 */
Template.menu.rendered = function () {
  Meteor.defer(function() {
    $('.menu.animated').addClass('animate-in');
  });
  $('#primary-menu-btn').on('click', function (e) {
    $('body').addClass('hide-hints');
  })
};

$('a[role=navigation]').on( 'click', function (e) {
  $('html,body').animate({scrollTop: $('body').offset().top});
});