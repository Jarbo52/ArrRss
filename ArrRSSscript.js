var yqls = ['https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FWorld.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.wsj.com%2Fxml%2Frss%2F3_7041.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22https%3A%2F%2Frss.sciencedaily.com%2Fall.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.economist.com%2Fsections%2Feconomics%2Frss.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22https%3A%2F%2Fwww.ted.com%2Ftalks%2Frss%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22https%3A%2F%2Fwww.bloomberg.com%2Ffeeds%2Fpodcasts%2Fetf_report.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.politico.com%2Frss%2Fpoliticopicks.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.espn.com%2Fespn%2Frss%2Fnews%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.espn.com%2Fespn%2Frss%2Fnfl%2Fnews%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.wsj.com%2Fxml%2Frss%2F3_7014.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.wsj.com%2Fxml%2Frss%2F3_7031.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Ffeeds.ign.com%2Fign%2Fall%3Fformat%3Dxml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml%3Fedition%3Duk%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fscience_and_environment%2Frss.xml%3Fedition%3Duk%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Ftechnology%2Frss.xml%3Fedition%3Duk%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fanimefeeds.com%2Ffeed%2F%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.animenewsnetwork.com%2Fall%2Frss.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.artnews.com%2Ffeed%2F%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.rollingstone.com%2Fmusic%2Frss%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20%22http%3A%2F%2Fwww.rollingstone.com%2Fmovies%2Frss%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.wsj.com%2Fxml%2Frss%2F3_7085.xml%22&format=json&diagnostics=true&callback=printRSS', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.apple.com%2Fpr%2Ffeeds%2Fpr.rss%22&format=json&diagnostics=true&callback=printRSS'];
var names = ['NY Times World News', 'Wall Street Journal Opinion', 'Science Daily', 'The Economist', 'TED talks', 'Bloomberg', 'Politico', 'ESPN Top Headlines', 'ESPN NFL News', 'Wall Street Journal U.S. Business', 'Wall Street Journal Market News', 'IGN News', 'BBC World News', 'BBC Science/Nature', 'BBC Technology', 'AnimeFeed', 'Anime News Network', 'ARTnews', 'Rolling Stone Music', 'Rolling Stone Movies', 'Wall Street Journal World News', 'Apple News'];
var tags = ['nyt feed', 'wsj opinion journal wall street feed', 'sd science tech technology feed', 'eco economy money world news feed', 'ted education talks learn feed', 'blm money finance stock market income currencies feed', 'pol politics president legistative executive judicial democrat republican feed', 'espn top headlines sports feed', 'espn nfl sports headlines feed', 'wsj wall street journal us business money economy feed', 'wsj wall street journal market stock money economy feed', 'ign news gaming video games feed', 'bbc world headlines current news feed', 'bbc science nature feed', 'bbc technology tech feed', 'anime tv show cartoon animated feed', 'anime tv show cartoon network feed', 'art arts painting drawing feed', 'music rolling stone arts feed', 'movies rolling stone pop culture feed', 'wsj world feed', 'apple feed'];

function closeFeeds() {
	setTimeout(function () {
		document.getElementById('rssHolder').style.display = "none";
		document.getElementById('searchedList').style.display = "block";
		document.getElementById('closeButton').style.display = "none";
		var rssFeed = document.getElementById('rss');
		//rssFeed.parentNode.removeChild(rssFeed);

	}, 500);
}

function rssRequest(callingElement) {
	var holding = callingElement.innerHTML;
	setTimeout(function () {
		var newScript = document.createElement('script');
		newScript.setAttribute('type', 'text/javascript');
		newScript.setAttribute('src', callingElement.id);
		newScript.setAttribute('id', 'rss');
		document.getElementsByTagName('head')[0].appendChild(newScript);
		setTimeout(function () {
			callingElement.innerHTML = holding;
		}, 1500);
	}, 3000);

	callingElement.innerHTML = "Loading...";
}

function printRSS(response) {
	var rss = '';
	var article;
	var len = response.query.results.item.length;
	if (len > 15) {
		len = 15;
	}
	for (var i = 0; i < len; i++) {
		article = response.query.results.item[i];
		rss += '<li><a href = "' + article.link + '" target ="_blank">' + article.title + '</a></li>';
	}

	document.getElementById("listHolder").style.display = "none";
	document.getElementById("searchHolder").style.display = "none";
	document.getElementById("searchedList").style.display = "none";
	document.getElementById("aboutHolder").style.display = "none";


	document.getElementById('closeButton').style.display = "inline-block";
	document.getElementById('rssHolder').innerHTML = rss;
	document.getElementById('rssHolder').style.display = "block";
}

function searchButton() {
	document.getElementById("rssHolder").style.display = "none";
	document.getElementById("listHolder").style.display = "none";
	document.getElementById("searchHolder").style.display = "block";
	document.getElementById("searchedList").style.display = "none";
	document.getElementById("aboutHolder").style.display = "none";
	document.getElementById('closeButton').style.display="none";
}

function aboutButton() {
	document.getElementById('aboutHolder').style.display = "block";
	document.getElementById('searchHolder').style.display = "none";
	document.getElementById('listHolder').style.display = "none";
	document.getElementById('closeButton').style.display="none";
}

function addFeed() {
	window.location.hash = "";
	var feedTag = document.getElementById('newFeedTag').value;
	var feedName = document.getElementById('newFeedName').value;
	var feedURL = document.getElementById('newFeedURL').value;

	var feedURLv2 = feedURL.replace(":", "%3A");
	var feedURLv3 = feedURLv2.replace("/", "%2F");
	var yqlURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22' + feedURLv3 + '%22&format=json&diagnostics=true&callback=printRSS';

	var feedTag = feedTag + " feed";

	yqls.push(yqlURL);
	names.push(feedName);
	tags.push(feedTag);

	if (document.getElementById('loa').checked)
	{
		var searchedFeed = document.createElement('div');
		searchedFeed.setAttribute('class', 'rssFeed');
		var searchedBody = document.createElement('div');
		searchedBody.setAttribute('class', 'rssTitle');
		var searchedData = document.createElement('p');
		searchedData.setAttribute('id', yqlURL);
		searchedData.setAttribute('class', feedTag);
		searchedData.setAttribute('onclick', 'rssRequest(this)');
		searchedData.innerHTML = feedName;
		searchedBody.appendChild(searchedData);
		searchedFeed.appendChild(searchedBody);
		document.getElementById('searchedList').appendChild(searchedFeed);
		
		document.getElementById('listHolder').style.display = "none";
		document.getElementById("rssHolder").style.display = "none";
		document.getElementById("listHolder").style.display = "none";
		document.getElementById("searchHolder").style.display = "none";
		document.getElementById("aboutHolder").style.display = "none";
		document.getElementById('searchedList').style.display = "block";
	}
	
	document.getElementById('call').reset();
}

function searchFeeds(sData) {
	document.getElementById('searchHolder').style.display = "none";

	var searchData = "";
	if (sData == "") {
		searchData = document.getElementById('searchData').value;
	} else {
		searchData = sData;
	}

	document.getElementById('searchedList').innerHTML = "";
	var sList = document.getElementById('searchedList');

	var applicableFeeds = [];
	if (searchData != "") {

		for (var i = 0; i < tags.length; i++)
			if (tags[i].includes(searchData))
				applicableFeeds.push(i);

		for (var i = 0; i < applicableFeeds.length; i++) {
			var searchedFeed = document.createElement('div');
			searchedFeed.setAttribute('class', 'rssFeed');
			var searchedBody = document.createElement('div');
			searchedBody.setAttribute('class', 'rssTitle');
			var searchedData = document.createElement('p');
			searchedData.setAttribute('id', yqls[applicableFeeds[i]]);
			searchedData.setAttribute('class', tags[applicableFeeds[i]]);
			searchedData.setAttribute('onclick', 'rssRequest(this)');
			searchedData.innerHTML = names[applicableFeeds[i]];
			searchedBody.appendChild(searchedData);
			searchedFeed.appendChild(searchedBody);
			sList.appendChild(searchedFeed);
		}

		document.getElementById('closeButton').style.display="none";
		document.getElementById('listHolder').style.display = "none";
		document.getElementById("rssHolder").style.display = "none";
		document.getElementById("listHolder").style.display = "none";
		document.getElementById("searchHolder").style.display = "none";
		document.getElementById("aboutHolder").style.display = "none";
		sList.style.display = "block";
	}
}

function displayAbout() {
	document.getElementById("rssHolder").style.display = "none";
	document.getElementById("listHolder").style.display = "none";
	document.getElementById("searchHolder").style.display = "none";
	document.getElementById("searchedList").style.display = "none";
	document.getElementById("aboutHolder").style.display = "block";
	document.getElementById('closeButton').style.display="none";
}