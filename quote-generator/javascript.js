
var quotes = [
"Probably one of the most private things in the world is an egg until it is broken. <div class=\"author text-right\"> - M. F. K. Fisher</div>",
  "I look at you and see the rest of my life in front of my eyes.<div class=\"author text-right\"> - (Unknown)</div>",
"The loveliest thing you can do is cook for someone who's close to you.  It is about as nice a valentine as you can give. <div class=\"author text-right\">- Julia Child</div>",
  "All, everything that I understand, I only understand because I love. <div class=\"author text-right\"> — Leo Tolstoy</div>",
"The main facts in human life are five: birth, food, sleep, love and death. <div class=\"author text-right\"> - E.M. Forster</div>",
  "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. <div class=\"author text-right\"> — Helen Keller</div>",
"All you need is love. But a little chocolate now and then doesn't hurt. <div class=\"author text-right\"> - Charles M. Schulz</div>",
  "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you. <div class=\"author text-right\"> - A. A. Milne</div>",
"We should look for someone to eat and drink with before looking for something to eat and drink. <div class=\"author text-right\"> - Epicurus</div>",
  "At the touch of love everyone becomes a poet. <div class=\"author text-right\"> - Plato</div>",
"There is no sincerer love than the love of food. <div class=\"author text-right\"> - George Bernard Shaw</div>",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. <div class=\"author text-right\"> - Lao-Tzu</div>",
"Cooking is like love, it should be entered into with complete abandon or not at all. <div class=\"author text-right\"> - Harriet Von Horne</div>",
  "Love is so short, forgetting is so long. <div class=\"author text-right\"> - Pablo Neruda</div>",
"All happiness depends on a leisurely breakfast. <div class=\"author text-right\"> - John Gunther</div>",
  "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more. <div class=\"author text-right\"> - Angelita Lim </div>",
"I have measured out my life in coffee spoons. - <div class=\"author text-right\"> T.S. Eliot </div>",
  "Morning without you is a dwindled dawn. <div class=\"author text-right\"> - Emily Dickinson </div>",
"One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating. <div class=\"author text-right\"> - Luciano Pavarotti</div>"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));

  /* Using document.getElementById() we can pass in any string and JavaScript will look through our HTML document and retrieve it for use to do whatever we want with it. We will pass in ‘quoteDisplay’ as a parameter to retrieve the HTML element with the id of “quoteDisplay”. We will use the .innerHTML method to pass a randomly retrieved quote from our array as the value that will be added into our HTML quoteDisplay element.*/
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}