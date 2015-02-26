Accounts.config({
  //forbidClientAccountCreation: true
});

if(Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });
  //Analytics.register(GoogleAnalyticsTracker, {account: Meteor.settings.public.tracker.ga.account, domain: Meteor.settings.public.tracker.ga.domain});

  SEO.configure({
    baseTitle: ' - BikeAbout'
  });

}