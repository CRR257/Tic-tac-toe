import React, { useState, useEffect } from 'react';
import Board from '../board/index';

const Game = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState('');
    const [current, setCurrent] = useState(history[stepNumber])

    useEffect(() => {
        setCurrent(history[stepNumber]);
        let winner = calculateWinner(current.squares);

        if (winner) {
            setStatus('Winner: ' + winner);
        } else {
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
        }
    });

    const calculateWinner = (squares) => {
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

    const handleClick = (i) => {
        const historyLong = history.slice(0, stepNumber + 1);
        setCurrent(historyLong[historyLong.length - 1]);
        const squares = current.squares.slice(); // copy squares array to not modify the original array
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(historyLong.concat([{ squares: squares }]))
        setStepNumber(historyLong.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    };

    const moves = history.map((step, move) => {
        let desc = move ? 'Go to move # ' + move : 'Go to game start';
        return (
            <li key={step}>
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


// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{
//                 squares: Array(9).fill(null)
//             }],
//             stepNumber: 0,
//             xIsNext: true
//         };
//     }

//     calculateWinner(squares) {
//         const lines = [
//           [0, 1, 2],
//           [3, 4, 5],
//           [6, 7, 8],
//           [0, 3, 6],
//           [1, 4, 7],
//           [2, 5, 8],
//           [0, 4, 8],
//           [2, 4, 6],
//         ];
//         for (let i = 0; i < lines.length; i++) {
//           const [a, b, c] = lines[i];
//           if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//           }
//         }
//         return null;
//       }

//       handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length -1];
//         const squares = current.squares.slice(); // copia array squares, x no modificar array existent
//         if(this.calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             history: history.concat([{squares: squares}]), // concat do not mutate original array
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         })
//     };

//     jumpTo(step) {
//         this.setState( {
//             stepNumber: step,
//             xIsNext: (step % 2) === 0
//         })
//     }
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = this.calculateWinner(current.squares);

//         const moves = history.map((step, move) => {
//             const desc = move ? 'Go to move # ' + move : 'Go to game start';

//             return (
//                 <li key={step}>
//                     <button onClick={() => this.jumpTo(move)}>
//                         {desc}
//                     </button>
//                 </li>
//             )
//         })
//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner;
//           } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//           }

//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board 
//                         squares = {current.squares}
//                         onClick={(i) => this.handleClick(i)}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }


// export default Game;