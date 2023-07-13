import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./quoteparser.module.css";

const QuoteParser = () => {
    const [quote,setQuote] = useState('')

    const getQuote = () => {
        axios.get("https://type.fit/api/quotes") //Запрос к API
            .then(res =>
        {
            let quoteNumber = Math.floor(Math.random()* res.data.length) //Выбор номера случайной цитаты
            setQuote(res.data[quoteNumber])
        })
    }

    useEffect(()=>{
       getQuote() //Функция вызывается каждый раз при обновлении страницы
    },[])
    return (
        <div className={classes.quoteContainer}>
            <div className={classes.quoteText}>{quote.text}</div>
            <div className={classes.quoteAuthor}>{quote?.author ? quote?.author : "Неизвестно"}</div>
            <button className={classes.quoteButton} onClick={getQuote}>Get Quote!</button>
        </div>
    );
};

export default QuoteParser;