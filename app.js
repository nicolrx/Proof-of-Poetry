/* global instantsearch */

app({
  appId: 'YOUR ALGOLIA APP ID',
  apiKey: 'YOUR ALGOLIA API KEY',
  indexName: 'YOUR ALGOLIA INDEX NAME'
});

function app(opts) {
  var search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    searchParameters: {
    	"query": ""
    }
});

  var widgets = [
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Start searching some poetry lines from the bitcoin whitepaper...'
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
      empty: getTemplate("no-results-template"),
      item: '<h3 onclick="choice(this)" data-phon="{{{phon}}}" class="first-choice">{{{line}}}</h3>'
    },
    hitsPerPage: 5
    }),
    instantsearch.widgets.stats({
      container: '#stats'
    })
  ];

  widgets.forEach(search.addWidget, search);
  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName).innerHTML;
}

function getHeader(line) {
  return '<h5>' + line + '</h5>';
}
