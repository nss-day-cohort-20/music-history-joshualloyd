var listLink = document.getElementById('list-link');
var addLink = document.getElementById('add-link');
var listView = document.getElementById('list-view');
var addView = document.getElementById('add-view');

listLink.addEventListener('click', function(){
	addView.classList.toggle('hidden');
	listView.classList.toggle('hidden');
});

addLink.addEventListener('click', function(){
	listView.classList.toggle('hidden');
	addView.classList.toggle('hidden');
});