// Get Quotes from API
let apiQuotes = [];

// Get new quote

function newQuote() {
    // Get a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert('Something went wrong...')
    }
}

// On load
getQuotes();