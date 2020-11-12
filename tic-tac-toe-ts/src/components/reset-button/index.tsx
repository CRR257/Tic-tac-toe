import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { CountActions } from '../../redux/actions/countActions';

const ResetButton = () => {
    const countDispatch = useDispatch<Dispatch<CountActions>>();
    
    const handleResetCount = () => {
        countDispatch({type: 'RESET'});
    }

    return (
        <div>
            <button onClick={handleResetCount} className="result button">Reset</button>
        </div>
    )
}

export default ResetButton;