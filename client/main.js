UsageTracker.register(GoogleAnalytics);

/*
var scriptLoaded = false,
    commentsShown = false;

Template.tumblrFeedPost.rendered = function () {
  commentsShown = false;
  if(!scriptLoaded) {
    loadScript();
  }
  else {
    resetScript();
  }

  function loadScript () {
    var thread = $('<div id="disqus_thread">').appendTo('article.post');
    var disqus_shortname = Meteor.settings.public.disqus.shortname; // required: replace example with your forum shortname
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    scriptLoaded = true;
    commentsShown = true;
  }

  function resetScript() {
    DISQUS.reset({
      reload: true,
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
*/
