if(Meteor.isClient) {

  var photos = null,
      photosDep = new Deps.Dependency;

  var photoDep = new Deps.Dependency
      photo = null;

  Router.map( function () {
    this.route('photos', {
      waitOn: function () {
        Meteor.call('GoogleDriveFolder', function (error, result) {
          if(error) console.log(error);
          console.log(result);
          photos = result.items;
          _.each(photos, function (photo, i) {
            photos[i].viewUrl = 'https://drive.google.com/uc?id=' + photo.id;
          });
          photosDep.changed();
        });
      },
      data: function () {
        photosDep.depend();
        return {
          items: photos
        };
      },
      onRun: function () {
        SEO.title( 'Photos' );
        SEO.description( 'Pictures from our trips.' );
      }
    });
    this.route('photo', {
      path: '/photo/:id',
      waitOn: function () {
        Meteor.call('GoogleDriveFile', this.params.id, function (error, result) {
          if(error) console.log(error);
          console.log(result);
          photo = result;
          photoDep.changed();
        });
      },
      data: function () {
        photoDep.depend();
        return photo;
      },
      onRun: function () {
        SEO.title( 'Photos' );
        SEO.description( 'Pictures from our trips.' );
      }
    });
  });

}

