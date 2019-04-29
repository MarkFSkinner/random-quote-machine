function getRandomQuote() {
  $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(json) {
    let selection = json.quotes[Math.floor(Math.random() * json.quotes.length)];
    $('#quote').html(selection.quote);
    $('#author').html('- ' + selection.author);
    let twitterText = '"' + selection.quote + '"' + ' ' + selection.author;
    if (twitterText.length > 272) {
      twitterText = '"' + selection.quote.substring(0, (266 - selection.author.length))
      + '..."' + ' ' + selection.author;
    }
    $('#tweet-btn').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text='
      + encodeURIComponent(twitterText));
  });
}

$('#quote-generator').on('click', function() {
  getRandomQuote();
});

//Run on page load
$(function() {
  getRandomQuote();
});