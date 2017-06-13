var songs = [];

songs[songs.length] = "Bohemian Rhapsody > by Queen";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "I Would Do Anything For Love > by Meatloaf";

function printSongList(inputString) {
	let songList = document.getElementById('song-list-ul');
	songList.innerHTML = inputString;
}



let songHTMLString = '';

for ( var i = 0 ; i<songs.length ; i++ ) {
	songHTMLString += `
	<li>
		<h3>${songs[i]}</h3>
		<p>Artist Name</p>
		<p>Album Name</p>
		<p>Genre</p>
	</li>
	`
}

printSongList(songHTMLString);