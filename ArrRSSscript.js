setTimeout(function()
{        
    var test = document.getElementById('rssHolder');
    test.style.color="red";
    test.style.display="inline";
    console.log("done");
}, 3000);
console.log("hi");

function rssRequest(callingElement)
{
    console.log(callingElement.id);
    var newScript = document.createElement('script');
    newScript.setAttribute('type','text/javascript');
    newScript.setAttribute('src',callingElement.id);
    document.getElementsByTagName('head')[0].appendChild(newScript);    
}

function printRSS(response)
{
    console.log(response);
    var rss = '';
    var article;
    var len = response.query.results.item.length;
    console.log("lem: " + len);
    for(var i = 0; i < len; i++)
    {
        article = response.query.results.item[i];
        rss += '<li><a href = "' + article.link[0] + '">' + article.title + '</a></li>';
        console.log("RSS: " + rss);
    }
    
    console.log(rss);
    console.log("DONEE");
    
    document.getElementById('rssHolder').innerHTML = rss;
}

function cbfunc(o)
{
    console.log("LEE");
}