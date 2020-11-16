import React from 'react';
import './index.css';

type BreweryCardProps = {
    id: number;
    name: string;
    state: string;
    website: string;
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    showAllBreweries: boolean;
}

const BreweryCard: React.FC<BreweryCardProps>= ({ id, name, state, website, callback, showAllBreweries}) => {
    return (
        showAllBreweries ?(
        <button className="breweries-card" value={id} onClick={callback}>
            <div className="breweries-card__title">{name}</div>
                <div className="breweries-card__information">{state}</div>
              <div className="breweries-card__information">{website}</div>
        </button>) : (
           <button className="breweries-card__selected" value={id} >
           <div className="breweries-card__title">{name}</div>
               <div className="breweries-card__information">{state}</div>
             <div className="breweries-card__information">{website}</div>
             <button onClick={callback} className="goBack">Go Back</button>
            </button>
        )
    )
}

export default BreweryCard;