var TorrentsSearch = require('../lib/torrents.js');

global.debug = true;

var tSearch = new TorrentsSearch({
	/*'t411': {
		username: 'USERNAME',
		password: 'PASSWORD'
	},
	'smartorrent': {
		username: 'USERNAME',
		password: 'PASSWORD'
	},*/
	'frenchtorrentdb': {
		username: 'USERNAME',
		password: 'PASSWORD'
	}
});

// Do some stuff...

tSearch.setCredentials({
	/*'t411': {
		username: 'NEW_USERNAME',
		password: 'NEW_PASSWORD'
	},
	'smartorrent': {
		username: 'NEW_USERNAME',
		password: 'NEW_PASSWORD'
	},*/
	'frenchtorrentdb': {
		username: 'NEW_USERNAME',
		password: 'NEW_PASSWORD'
	}
});

tSearch.search('spiderman', 'movie', function(err, torrents) {
	if(err) { console.log('Error ! '+ err); return; }

	console.log(torrents.length +' torrents found !');
	//console.log(torrents);

	console.log('Download 1th torrent...');
	tSearch.download(torrents[0].tracker, torrents[0].custom, function(error, torrentFile) {
		if(error) { console.log(error); return; }

		console.log(torrentFile);
	});
});