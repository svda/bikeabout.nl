do () ->

#  Accounts.config({
#      forbidClientAccountCreation: true
#  });

  insert = (item, i) ->
    Content.insert
      published_date: new Date()
      name: item.name
      slug: item.slug
      order: i+1

  items = [
    'slug': '/about',
    'name': 'About'
  ,
    'slug': '/method',
    'name': 'Method'
  ,
    'slug': '/work',
    'name': 'Work'
  ,
    'slug': '/feed',
    'name': 'Lab'
  ]

  if Content.find().count() == 0
    insert item, i for item, i in items