const quotes=[
    {
        quote:"If you want the rainbow, you gotta put up with the rain.",
        author:"Dolly Parton",
    },
    {
        quote:"Don't let the fear of striking out hold you back.",
        author:"Babe Ruth",
    },
    {
        quote:"Be curious.",
        author:"Stephen Hawking",
    },
    {
        quote:"He who knows best knows how little he knows.",
        author:"Thomas Jefferson",
    },
    {
        quote:"Dreaming, after all, is a form of planning.",
        author:"Gloria Steinem",
    },
    {
        quote:"All our dreams can come true if we have the courage to pursue them.",
        author:"Walt Disney",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
