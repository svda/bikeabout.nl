Router.map( function () {
  this.route('photos', {
    path: '/photos/:id?',
    /**
     * Description
     * @method waitOn
     * @return 
     */
    waitOn: function () {
      //return Meteor.subscribe('drive');
    },
    /**
     * Description
     * @method data
     * @return ObjectExpression
     */
    onBeforeAction: function () {
      Meteor.subscribe('drive');
      Session.set('Photos.selectedPhoto', this.params.id);
    },
    data: function () {
      var files = GoogleDriveCollection.find().fetch();
      var sortedFiles = _.sortBy( files, function (file) {
        if(file.imageMediaMetadata)
          return file.imageMediaMetadata.date;
        else
          return 0;
      });
      return {
        files: sortedFiles.reverse()
      };
    },
    /**
     * Description
     * @method onRun
     * @return 
     */
    onRun: function () {
      SEO.title( 'Photos' );
      SEO.description( 'Pictures from our trips.' );
    }
  });
});

if(Meteor.isClient) {

  Template.photo.helpers({
    selectedPhoto: function () {
      var photo = GoogleDriveCollection.findOne(Session.get('Photos.selectedPhoto'));
      if(photo) {
        photo.fullLink = 'https://drive.google.com/uc?export=view&id=' + photo.id;
        var img = new Image();
        img.onload = function() {
          var top = document.getElementById("shoji").scrollTop;
          $('#photo').css('top', top).removeClass().addClass('visible');
          $('#shoji').css('overflow-y', 'hidden');
        }
        img.src = photo.fullLink;
        return photo;
      }
    }
  });

  Template.photo.events({
    'click #photo': function (event) {
      $('#photo').removeClass();
      Session.set('Photos.selectedPhoto', false);
      $('#shoji').css('overflow-y', 'scroll');
    } 
  });

}