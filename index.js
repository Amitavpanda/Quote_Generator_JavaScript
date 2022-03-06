const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const linkedinBtn = document.getElementById('linkedin');

const newQuotes = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;

    }
    quoteText.textContent = quote.text;
}
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();

    } catch (error) {
        console.log(error);
    }
}
tweetQuote = () => {
    const twitterUrl = `https://twitter.com/compose/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}
postQuote = () => {
    const linkedinUrl = `https://www.linkedin.com/feed?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(linkedinUrl, '_blank');

}
linkedinBtn.addEventListener('click', postQuote);
twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', newQuotes);

getQuotes();