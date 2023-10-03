const dataQuote=[
    {auther:"Alice Walker",
    quote:"The most common way people give up their power is by thinking they don't have any"},
    {auther:"Nelson mandela", 
    quote:"It's always seem impossible untill it's done"  },
    {auther:"Etupian proverb",
    quote:"Coffee and love taste best when  hot"  },
    {auther:"Rumi Saadi",
    quote:"Don't blame god  for creating the tiger, thenk him for not giving it wings"},
    {auther:"Dr. Martin Luther King, Jr",
    quote:"The time is always right to do what is right"},
    {auther:"James Baldwin",
    quote:"If you know whence you came, there is really no limit to where you can go."},
    {auther:"Jesse Jackson",
    quote:"If you fall behind, run faster. Never give up, never surrender, and rise up against all odds"},
    {auther:"Rumi Saadi",
    quote:"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed."},
    {auther:"Barack Obama",
    quote:"Change will not come if we wait for some other person or if we wait for some other time. We are the ones we’ve been waiting for. We are the change that we seek"}
    
]
    window.onload=init;
    function init(){
        getRandomQuote()
        getRandomStyle()
    }
    function getRandomQuote(){
        
        styleToChange=document.getElementById("back1")
        const styles=[
        {style:"rgb(233, 196,106)"},
        {style:"rgb(42,157,143)"},
        {style:"rgb(244,162,97)"}
        ];
        let styleSize=styles.length;
        let randomIn=Math.floor(Math.random()*styleSize)
        let randomStyle=styles[randomIn];
        styleToChange.style.background=randomStyle.style;
        styleToChange.style.color=randomStyle.style;
        let quoteSize=dataQuote.length;
        let randomIndex=Math.floor(Math.random()*quoteSize);
        let randomQuote=dataQuote[randomIndex];
        let twitterLink="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
        let twitterFormatQuote= ' " ' + randomQuote.quote.replace(/\s/g,"%20") + ' " ';
        twitterLink+=twitterFormatQuote;
        let twitterFormatAuther=randomQuote.auther.replace(/\s/g,"%20")
        twitterLink+=" - " +twitterFormatAuther
        
        document.getElementById("tweet-quote").href = twitterLink;
        document.getElementById("text").innerText ='"    ' +randomQuote.quote+'    "';
        document.getElementById("author").innerText = "-" +randomQuote.auther;
    }
   
   