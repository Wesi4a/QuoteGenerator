var quotes = [
    'Life is what happens to us while we are making other plans.― Allen Saunders',
    'Life isn’t about finding yourself. Life is about creating yourself.― George Bernard Shaw',
    'Doubt kills more dreams than failure ever will. – Suzy Kassem',
    'Whether you think you can or think you can’t, you’re right. – Henry Ford',
    'The happiness of your life depends on the quality of your thoughts.” – Marcus Aurelius',
    'You do not find the happy life. You make it.— Camilla Eyring Kimball',
    'Folks are usually about as happy as they make up their minds to be. – Abraham Lincoln',
    'It is during our darkest moments that we must focus to see the light. — Aristotle',
    'The bad news is time flies. The good news is you’re the pilot. – Michael Altshuler',
    'Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi'
]
function newQuote(){
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}