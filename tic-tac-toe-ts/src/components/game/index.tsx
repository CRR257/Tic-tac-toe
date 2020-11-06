import React, { useState, useEffect } from 'react';
import Board from '../board';


interface Step {
    squares: Array<string>;
};

const Game = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [status, setStatus] = useState<string>('');
    let current = history[stepNumber];

   // type handleClick = (i: number) => void;

   useEffect(() => {
        current = history[stepNumber];
        let winner = calculateWinner(current.squares);

        if (winner) {
            setStatus('Winner: ' + winner);
        } else {
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
        }
    });

    const calculateWinner = (squares: Array<string>) => {
        // winning combinations moves on board
        const lines = [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            //  if (squares[a] && squares[a] => if mwe have X or O in the first position, if
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i: number) => {
        const historyLong: Step[] = history.slice(0, stepNumber + 1);
        const current: Step = historyLong[historyLong.length - 1];
        const squares: Array<string> = current.squares.slice(); // copy squares array to not modify the original array
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(historyLong.concat([{ squares: squares }]))
        setStepNumber(historyLong.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    };

    const moves = history.map((__, move: number) => {
        let desc: string = move ? 'Go to move => ' + move : 'Go to game start';
        return (
            <li key = {move}>
                <button onClick={() => jumpTo(move)}>
                    {desc}
                </button>
            </li>
        )
    });

    return (
        <div>
            <p className="title">Tic tac toe</p>
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        // onClick={(i) => handleClick(i)}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
    );
}

export default Game;
