import React from 'react';

interface SquareProps {
    value: number,
    onClick: () => void
};

const Square: React.FC<SquareProps> = (props: SquareProps) => {
    return (
        <button className="square" onClick={props.onClick}>
             {props.value}
        </button>
    )
};

export default Square;
