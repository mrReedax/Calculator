import './Button.css';

import React from 'react';

export const Button = ({content}) => {
    console.log(content)
    return <button type="submit" value={content} className="btn">{content}</button>
};


