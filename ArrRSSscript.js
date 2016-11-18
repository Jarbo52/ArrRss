var currentLocation = "";
var yqls=['a','https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.wsj.com%2Fxml%2Frss%2F3_7085.xml%22&format=json&diagnostics=true&callback=printRSS'];
var names=['a','Test'];
var tags=['a','wsj feed'];

function closeFeeds()
{
    setTimeout(function()
    {
        document.getElementById('rssHolder').style.display="none"; document.getElementById('listHolder').style.display="block";
        document.getElementById('closeButton').style.display="none";
        var rssFeed = document.getElementById('rss');
        //rssFeed.parentNode.removeChild(rssFeed);
        
    },500);
    console.log("closing");
}

function rssRequest(callingElement)
{
    var holding = callingElement.innerHTML;
    currentLocation=callingElement.className;
    console.log(currentLocation);
    setTimeout(function()
    {
        var newScript = document.createElement('script');
        newScript.setAttribute('type','text/javascript');
        newScript.setAttribute('src',callingElement.id);
        newScript.setAttribute('id','rss');
        document.getElementsByTagName('head')[0].appendChild(newScript); 
        setTimeout(function()
        {
          callingElement.innerHTML=holding;        
        },2500);
    },5000);
    
    callingElement.innerHTML="Loading...";
}

function printRSS(response)
{
    console.log(response);
    var rss = '';
    var article;
    var len = response.query.results.item.length;
    if(len > 15)
    {
        len = 15;
    }
    console.log("len: " + len);
    for(var i = 0; i < len; i++)
    {
        article = response.query.results.item[i];
        rss += '<li><a href = "' + article.link + '" target ="_blank">' + article.title + '</a></li>';
    }
    
    console.log("DONEE");
    
    document.getElementById('closeButton').style.display="inline-block";
    document.getElementById('listHolder').style.display="none";
    document.getElementById('rssHolder').innerHTML = rss;
    document.getElementById('rssHolder').style.display="block";
}

function searchButton()
{
    document.getElementById('searchHolder').style.display="block";
    document.getElementById('listHolder').style.display="none";
}

function searchFeeds()
{
    var searchData = document.getElementById('searchData').value;
    var sList = document.getElementById('searchedList');
    console.log(searchData);
    
    var applicableFeeds = [];
    if(searchData != "")
    {
        console.log("in if");

        for(var i = 0; i < tags.length; i++)
            if(tags[i].includes(searchData))
                applicableFeeds.push(i); 
        
        console.log(applicableFeeds[0]);
        
        for(var i = 0; i < applicableFeeds.length;i++)
        {
            var searchedFeed = document.createElement('div');
            searchedFeed.setAttribute('class','rssFeed');
            var searchedBody = document.createElement('div');
            searchedBody.setAttribute('class','rssTitle');
            var searchedData = document.createElement('p');
            searchedData.setAttribute('id',yqls[applicableFeeds[i]]);
            searchedData.setAttribute('class',tags[applicableFeeds[i]]);
            searchedData.setAttribute('onclick','rssRequest(this)')
            searchedData.innerHTML = names[applicableFeeds[i]];
            searchedBody.appendChild(searchedData);
            searchedFeed.appendChild(searchedBody);
            sList.appendChild(searchedFeed);
        }
        
        document.getElementById('listHolder').style.display="none";
        sList.style.display="block";
    }    
    alert("searched");
}
