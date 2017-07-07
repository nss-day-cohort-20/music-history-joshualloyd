var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Bohemian Rhapsody > by Queen on the album A Night at the Opera");
songs.push("I Would Do Anything For Love > by Meatloaf on the album Bat Out of Hell II: Back into Hell");

function buildSongListString(){
	let songHTMLString = '';

	for ( var i = 0 ; i<songs.length ; i++ ) {

		let fixedSongString = songs[i].replace('>','-').replace('*','').replace('@','').replace('!','').replace('(','');
		let songName = fixedSongString.substring(0, fixedSongString.indexOf(' -'));
		let artistName = fixedSongString.substring(fixedSongString.indexOf('by') + 2, fixedSongString.indexOf('on the album'));
		let albumName = fixedSongString.substring(fixedSongString.indexOf('album') + 5, fixedSongString.length + 1);



		songHTMLString +=
		`
		<li>
			<h3>${songName}</h3>
			<p>${artistName} |  ${albumName} | Genre</p>
		</li>
		`
	}

	return songHTMLString;
}

function printSongList(inputString) {
	let songList = document.getElementById('song-list-ul');
	songList.innerHTML = inputString;
}

