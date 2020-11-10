import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NameActions } from '../../redux/actions/nameActions';
import { AppState } from '../../redux/reducers/rootReducer';
import './index.css';

const Welcome = () => {
  const { name1 } = useSelector((state: AppState) => state.name);
  const { name2 } = useSelector((state: AppState) => state.name);
  const nameDispatch = useDispatch<Dispatch<NameActions>>();

  const handleSetName1 =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      nameDispatch({ type: 'SET_NAME_1', payload: e.target.value })
    }

  const handleSetName2 =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      nameDispatch({ type: 'SET_NAME_2', payload: e.target.value })
    }

  return (
    <div>
      <p className="title">Welcome {name1} & {name2}</p>
      <div className="container welcome">
        <label htmlFor="text">Player 1 name:</label>
        <input type="text" onChange={handleSetName1} value={name1} />
        <br />
        <label htmlFor="text">Player 2 name:</label>
        <input type="text" onChange={handleSetName2} value={name2} />
      </div>
    </div>
  );
}

export default Welcome;