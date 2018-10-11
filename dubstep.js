function songDecoder(song) {
	return song
		.split('WUB')
		.filter(Boolean)
		.join(' ');
}

let s = songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
console.log(s);

function songDecoderBest(song) {
	return song.replace(/(WUB)+/g, ' ').trim(); // did it without the trim
}

s = songDecoderBest('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
console.log(s);

//other
var songDecoderother = song =>
	song
		.split('WUB')
		.filter(x => x !== '')
		.join(' ');
