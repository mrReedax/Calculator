import React from 'react';
import '../css/Display.css';

export const Display = ({theText = '0'}) => {
    return <div className="textBox">{ theText }</div>;
};
