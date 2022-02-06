import React from 'react';
import { Button } from './Button';
import { BUTTONS } from './Buttons'

export const Boxes = () => {
    console.log(BUTTONS)
    return (BUTTONS.map(content =>
                        <div key={content}>
                            <Button content={content} />
                        </div>
                        )
            )
};
