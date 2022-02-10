import '../css/Button.css';
import React from 'react';

export const Button = ({ content }) => {
    return (content.map(text =>
        <button key={ text } type="submit" value={text} className="btn">{text}</button>))
};


