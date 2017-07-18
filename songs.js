let songs = [];

function loadSongs(jsonFile, buildString, renderList) {
	let songRequest = new XMLHttpRequest();

	songRequest.addEventListener('load', function() {
		console.log('event.target', event.target);
		let songsData = JSON.parse(event.target.responseText).songs;
		console.log('parsed data', songsData);
		songsData.forEach(function(songObj) {
			songs.push(songObj);
		});
		// songs = songsData;
		let builtString = buildString(songs);
		renderList(builtString);
	});

	songRequest.open('GET', jsonFile);

	songRequest.send();
}


function buildSongListString(songs){
	let songHTMLString = '';

	for ( var i = 0 ; i<songs.length ; i++ ) {

		songHTMLString +=
		`
		<li id="${[i]}">
			<h3>${songs[i].songName}</h3>
			<p>${songs[i].artistName} |  ${songs[i].albumName} | Genre</p>
			<button class="delete-btn" id="${[i]}">Delete</button>
		</li>
		`
	}

	return songHTMLString;
}

function printSongList(inputString) {
	let songList = document.getElementById('song-list-ul');
	songList.innerHTML = inputString;
	let deleteButtons = document.querySelectorAll('.delete-btn');
	// console.log('deleteButtons', deleteButtons);
	deleteButtons.forEach(function(deleteButton) {
		deleteButton.addEventListener('click', function() {
			// console.log('event target', event.target);
			event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		});
	});
}


