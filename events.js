var listLink = document.getElementById('list-link');
var addLink = document.getElementById('add-link');
var listView = document.getElementById('list-view');
var addView = document.getElementById('add-view');
var songNameInput = document.getElementById('song-name-input');
var songArtistInput = document.getElementById('artist-input');
var songAlbumInput = document.getElementById('album-input');
var addBtn = document.getElementById('add-btn');

window.addEventListener('load', function(){
	printSongList(buildSongListString());
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
	var songString =`${songNameInput.value} > by ${songArtistInput.value} on the album ${songAlbumInput.value}`;//get form values
	songs.push(songString);
	songNameInput.value = '';
	songArtistInput.value = '';
	songAlbumInput.value = '';
	printSongList(buildSongListString());
});