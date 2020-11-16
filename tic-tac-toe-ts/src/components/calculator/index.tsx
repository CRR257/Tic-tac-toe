import React, { Dispatch, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { CountActions } from '../../redux/actions/countActions';
import ResetButton from '../reset-button';
import './index.css';

const Calculator = () => {
    const { count } = useSelector((state: AppState) => state.count);
    const countDispatch = useDispatch<Dispatch<CountActions>>();
    const [inputCalculator, setInputCalculator] = useState(0);

    const handleIncrement = () => {
        countDispatch({ type: 'INCREMENT', value: inputCalculator });
        setInputCalculator(0);
    }
    const handleDecrement = () => {
        countDispatch({ type: 'DECREMENT', value: inputCalculator });
        setInputCalculator(0);
    }
    const handleMultiply = () => {
        countDispatch({ type: 'MULTIPLY', value: inputCalculator });
        setInputCalculator(0);
    }
    const handleDivide = () => {
        countDispatch({ type: 'DIVIDE', value: inputCalculator });
        setInputCalculator(0);
    }

    useEffect(() => {
        if (isNaN(inputCalculator)) {
            setInputCalculator(0);
        }
        console.log(inputCalculator)
    }, [inputCalculator])

    return (
        <div>
            <p className="title">Calculator</p>
            <div className="container count result">
                Start value = {count}
            </div>
            <div className="container count">
                <button onClick={handleIncrement} className="counter" disabled={inputCalculator === 0}> + </button>
                <button onClick={handleDecrement} className="counter" disabled={inputCalculator === 0}> - </button>
                <button onClick={handleMultiply} className="counter" disabled={inputCalculator === 0}> * </button>
                <button onClick={handleDivide} className="counter" disabled={inputCalculator === 0}> / </button>
            </div>
            <div className="container count">
                <button className="counter">
                    <input onChange={e => setInputCalculator(parseInt(e.target.value))} type="number" placeholder="Insert a number" value={inputCalculator === 0 ? '' : inputCalculator} />
                </button>
            </div>
            <div className="container">
                <p className="count result">Result = {count}</p>
                <ResetButton />
            </div>
        </div>
    )
}

export default Calculator;
