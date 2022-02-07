import React from 'react';
import { Button } from './Button';
import { BUTTONS } from './Buttons'

export const Boxes = () => {
    return (BUTTONS.map(content =>
                        <div key={content}>
                            <Button content={content} />
                        </div>
                        )
            )
};
