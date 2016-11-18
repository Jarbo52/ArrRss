var currentLocation = "";
var yqls=[];
var names=[];
var tags=[];

function closeFeeds()
{
    setTimeout(function()
    {
        document.getElementById('rssHolder').style.display="none"; document.getElementById('listHolder').style.display="block";
        document.getElementById('closeButton').style.display="none";
        var rssFeed = document.getElementById('rss');
        rssFeed.parentNode.removeChild(rssFeed);
        
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
    var searchData = document.getElementById('searchData');
    var applicableFeeds = [];
    if(searchData != "")
    {
        for(var i = 0; i < tags.length; i++)
            if(tags[i].includes(searchData))
                applicableFeeds.push(i); 
        
        for(var i = 0; i < applicableFeeds.length;i++)
        {
            var searcedFeed = document.createElement('div');
            searcedFeed.setAttribute('class','rssFeed');
            var searchedBody = document.createElement('div');
            searchedBody.setAttribute('class','rssTitle');
            var searchedData 
        }
    }    
    alert("searched");
}
