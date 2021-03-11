import RandomQuoteMachine from "./RandomQuoteMachine";
import React, {useEffect, useState} from "react";

const randomColor = [//took colors from https://codepen.io/freeCodeCamp/full/qRZeGZ
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
]

const RandomQuoteMachineContainer = () => {

    const [colorIndex, setColorIndex] = useState(0);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const getQuotes = () => {
            fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setQuotes(data.quotes);
                });
        };
        (Number(quotes) === 0) && getQuotes();
    }, [quotes])

    const getRandomIndex = (maxValue) => Math.floor(Math.random() * Math.floor(maxValue));

    const textColor = {
        color: randomColor[colorIndex]
    }

    const backgroundColor = {
        backgroundColor: randomColor[colorIndex]
    }

    const newQuote = () => {
        setQuoteIndex(getRandomIndex(quotes.length));
        setColorIndex(getRandomIndex(randomColor.length));
    }

    return (Number(quotes) !== 0)
        ? <RandomQuoteMachine quote={quotes[quoteIndex].quote}
                              author={quotes[quoteIndex].author}
                              textColor={textColor}
                              backgroundColor={backgroundColor}
                              newQuote={newQuote}/>
        : <span>Downloading quotes...</span>
}

export default RandomQuoteMachineContainer;