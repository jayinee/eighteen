/** ScrollSpy **/

var redEntry = document.getElementById('red');
var blueEntry = document.getElementById('blue');
var greenEntry = document.getElementById('green');
var yellowEntry = document.getElementById('yellow');
var redTab = document.getElementById('redTab');
var blueTab = document.getElementById('blueTab');
var greenTab = document.getElementById('greenTab');
var yellowTab = document.getElementById('yellowTab');
var scrollSpyDiv = document.getElementById('scrollspy_container');

scrollSpyDiv.addEventListener('scroll', function() {
	var currentActiveTab = document.querySelector('.activeTab');

	if (Math.abs(redEntry.getBoundingClientRect().top - redTab.getBoundingClientRect().bottom) <= 7) {
		if (currentActiveTab !== null) {
			currentActiveTab.classList.remove('activeTab');
		}
		redTab.classList.add('activeTab');
	}

	if (Math.abs(blueEntry.getBoundingClientRect().top - redTab.getBoundingClientRect().bottom) <= 7) {
		if (currentActiveTab !== null) {
			currentActiveTab.classList.remove('activeTab');
		}
		blueTab.classList.add('activeTab');
	}

	if (Math.abs(greenEntry.getBoundingClientRect().top - redTab.getBoundingClientRect().bottom) <= 7) {
		if (currentActiveTab !== null) {
			currentActiveTab.classList.remove('activeTab');
		}
		greenTab.classList.add('activeTab');
	}

	if (Math.abs(yellowEntry.getBoundingClientRect().top - redTab.getBoundingClientRect().bottom) <= 7) {
		if (currentActiveTab !== null) {
			currentActiveTab.classList.remove('activeTab');
		}
		yellowTab.classList.add('activeTab');
	}
});