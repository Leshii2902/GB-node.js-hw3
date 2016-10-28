
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readline = require('readline');


var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var key='trnsl.1.1.20161026T164059Z.420cefacc13ec0d9.bc897ba78a4fc7818e8bdd0708876fdbd5c65843';

console.log('Введите ваше слово');

rl.on('line', function(word) {
	
	request('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+key+'&text='+word+'&lang=en-ru', function (error, response, html) {
		if (!error && response.statusCode == 200) {
			word = JSON.parse(html);
			console.log(word.text);
			}
	});	


});
