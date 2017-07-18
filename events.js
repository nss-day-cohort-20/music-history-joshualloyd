let listLink = document.getElementById('list-link');
let addLink = document.getElementById('add-link');
let listView = document.getElementById('list-view');
let addView = document.getElementById('add-view');
let songNameInput = document.getElementById('song-name-input');
let songArtistInput = document.getElementById('artist-input');
let songAlbumInput = document.getElementById('album-input');
let addBtn = document.getElementById('add-btn');
let moreBtn = document.getElementById('more-btn');

window.addEventListener('load', function(){
	loadSongs('songs1.json', buildSongListString, printSongList);
});

listLink.addEventListener('click', function(){
	addView.classList.toggle('hidden');
	listView.classList.toggle('hidden');
});

addLink.addEventListener('click', function(){
	listView.classList.toggle('hidden');
	addView.classList.toggle('hidden');
});

addBtn.addEventListener('click', function(){
	let songObj = {
		songName: songNameInput.value,
		artistName: songArtistInput.value,
		albumName: songAlbumInput.value
	};//get form values
	console.log("songObj", songObj);
	songs.push(songObj);
	songNameInput.value = '';
	songArtistInput.value = '';
	songAlbumInput.value = '';
	printSongList(buildSongListString(songs));
	let deleteButtons = document.querySelectorAll('.delete-btn');
	console.log('deleteButtons', deleteButtons);
});

moreBtn.addEventListener('click', function() {
	loadSongs('songs2.json', buildSongListString, printSongList);
	moreBtn.disabled = true;
});