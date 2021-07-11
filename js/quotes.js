const quotes=[
    {
        quote:"first",
        author:"first-quote",
    },
    {
        quote:"second",
        author:"second-quote",
    },
    {
        quote:"third",
        author:"third-quote",
    },
    {
        quote:"fourth",
        author:"fourth-quote",
    },
    {
        quote:"fifth",
        author:"fifth-quote",
    },
    {
        quote:"sixth",
        author:"sixth-quote",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;