var request = require('request');
var cheerio = require('cheerio');

request('http://news.sputnik.ru/', function (error, response, html) {
  if (error)
    throw error;

  if ( response.statusCode !== 200 )
    return console.log('incorrect statusCode: ', response.statusCode);

  var $ = cheerio.load(html);
  
  $('.b-case-title').each(function(i, element) {
    console.log($(element).text().trim());
  });
});