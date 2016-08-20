# Proof Of Poetry
Proof of Poetry allows you to create randomly a poem using pieces of the Bitcoin's White Paper wrote by Satoshi Nakamoto.

The idea was to extract randomly sentences of the Bitcoin's White Paper (from 3 to 8 words). Then, I used a Javascript library called ["double-metaphone"](https://github.com/maritz/js-double-metaphone) to be able to create a poem with ABAB rhymes.

I wanted that the user could choose an input to generate the poem. That's why I used [Algolia Instant Search](https://community.algolia.com/instantsearch.js/) to allow the user to search on the fly the thousands of extracted sentences and pick one. Then, the app searches randomly the other poetry lines.

To set up the application, you have to open the "app.js" files and change the following informations: 

  appId: 'YOUR ALGOLIA ID',
  apiKey: 'YOUR ALGOLIA API KEY',
  indexName: 'YOUR ALGOLIA INDEX NAME'