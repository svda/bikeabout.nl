var commentsLoaded = false;
Template.tumblrFeedPost.rendered = function () {
  commentsLoaded = false;
  update();

  function update () {
    commentsLoaded = true;
    var thread = $('<div id="disqus_thread">').appendTo('article.post');
    var disqus_shortname = Meteor.settings.public.disqus.shortname; // required: replace example with your forum shortname
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

  $(document).on('scroll', function (e) {
    if(UI.isScrolledIntoView('.comments') && !commentsLoaded) {
      update();
    }
  });
};

Template.layout.events({
  'click #washi': function (e) {
    $('body').removeClass('menu-open');
  }
});

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