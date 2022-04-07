import React from "react";
import minuteIndicator from '../data/minuteIndicator';

function Article({title, date="January 1, 1970", preview, minutes}){
    let indicator = minuteIndicator(minutes);
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} / {indicator}{minutes} mins read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;