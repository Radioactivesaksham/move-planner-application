
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    // load streetview

    var street = $('#street').val();
    if( street != null)
    {
    street= street+", ";   
    }
    var city = $('#city').val();
    var address = street +' '+ city;
    var streetviewurl = 'https://maps.googleapis.com/maps/api/streetview?size=350x300&location=' + address + '&fov&=90&heading=235&pitch=10&key=AIzaSyBRwPIIF_IzuencGrOivHlrpVVWQ39H-tI';
    console.log(streetviewurl);
$body.append('<img class="bgimg" , src="'+streetviewurl+'">');
$(".add").append('<img class="bimg" , src="'+streetviewurl+'">');

//$( ".name" ).append( document.createTextNode( "Hello" ) );
/*var jqxhr = $.getJSON("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=MIT&api-key=GhsqHSG3BcF2Bmzoy2HIuJCezkv90DsV", function() {
  console.log( "success");
})
  .done(function() {
    console.log("second success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  */
var news=  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ address +"&api-key=GhsqHSG3BcF2Bmzoy2HIuJCezkv90DsV" ;   
$.getJSON(news, function(data){
$("#nytimes-header").text("Here are some articles about "+ street + city+
    ".");

var article1 = data.response.docs[0].headline.main;
console.log(article1);
var articles= data.response.docs
var i;
for (i=0; i<articles.length; i++){
var article= articles[i];
$(".article-list").append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+'</p>'+'</li>');
};   
});
return false;
};

$('#form-container').submit(loadData);
