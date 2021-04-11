import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { QUOTESTORE } from '../quoteStore';

const Quote = styled.p`
    margin: 0 auto;
    width: 80%;
    margin-bottom: 50px;

    & #quote-text {
        font-size: 24px;
    }

    & #quote-char {
        font-size: 22px;
        font-style: italic;
    }

    color: ${({ theme }) => theme.quoteTextColor};
`;

const QUOTE_TIME = 5000;

export default function RandomQuote() {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setRandomQuote();
        }, QUOTE_TIME);
    }, [quote]);

    const setRandomQuote = () => {
        const randomQuote = QUOTESTORE[Math.floor(Math.random() * QUOTESTORE.length)];
        
        const randomQuoteKey = Object.keys(randomQuote)[0];
        const randomQuoteValue = randomQuote[randomQuoteKey];

        const quoteKey = Object.keys(quote)[0];
        const quoteValue = quote[quoteKey];

        //check if previous and next quotes are equal. If so, re-call the function itself.
        if(randomQuoteKey.indexOf(quoteKey) === 0 && randomQuoteValue.indexOf(quoteValue) === 0)
            setRandomQuote();
        else
            setQuote(randomQuote);
    }

    return (
        <>
            {
                //check if quote state (object) has the key
                Object.keys(quote)[0] &&
                <Quote>
                    <span id="quote-text">{`"${quote[Object.keys(quote)[0]]}"`}</span>
                    <span id="quote-char">{`-${Object.keys(quote)[0]}`}</span>
                </Quote>
            }
        </>
    )
}