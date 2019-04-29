function getRandomQuote() {
  $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(json) {
    let selection = json.quotes[Math.floor(Math.random()*json.quotes.length)];
    if (selection.quoteAuthor === '') {
      selection.author = 'Unknown';
    }
    $('#quote').html(selection.quote);
    $('#author').html('- ' + selection.author);
    let twitterText = '"' + selection.quote + '"' + ' ' + selection.author;
    if (twitterText.length > 132) {
      let twitterText = '"' + selection.quote.substring(0, (126 - selection.author.length))
      + '..."' + ' ' + selection.author;
    }
    //$('#quote-container iframe').remove();
    //let tweetDiv = $('<div></div>').addClass('col-6').attr('id', 'tweet-div');
    /*let tweetBtn = $('<a></a>').addClass('twitter-share-button btn-custom')
      .attr('href', 'http://twitter.com/share')
      .attr('target', '_blank')
      .attr('data-size', 'large')
      .attr('data-url', '#')
      .attr('data-hashtags', 'quotes')
      .attr('data-show-count', 'false')
      .attr('data-text', twitterText)
      .attr('id', 'tweet-btn');*/
    //$('#button-container').append(tweetDiv);
    //$('#tweet-div').append(tweetBtn);
    //twttr.widgets.load();

    $('#tweet-btn').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(twitterText));
  });
}

$('#quote-generator').on('click', function() {
  getRandomQuote();
});

//Run on page load
$(function() {
  getRandomQuote();
});