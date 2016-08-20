/* global instantsearch */

function app2(choice_query) {
  var search2 = instantsearch({
    appId: 'YOUR ALGOLIA APP ID',
    apiKey: 'YOUR ALGOLIA API KEY',
    indexName: 'YOUR ALGOLIA INDEX NAME'
    searchParameters: {
    	"query": choice_query
    }
});

  var widgets = [
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
      empty: 'No results',
      item: '<h3 class="line2">{{{line}}}</h3>'
// 	  item: getTemplate('hit')
    },
    hitsPerPage: 4
    })
  ];

  widgets.forEach(search2.addWidget, search2);
  search2.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(line) {
  return '<h5>' + line + '</h5>';
}
