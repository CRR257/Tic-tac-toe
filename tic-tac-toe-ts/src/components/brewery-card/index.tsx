import React from 'react';
import './index.css';

type BreweryCardProps = {
    id: number;
    name: string;
    state: string;
    phone: string;
    website: string;
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    showAllBreweries: boolean;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ id, name, state, phone, website, callback, showAllBreweries }) => {
    return (
        showAllBreweries ? (
            <button className="breweries-card" value={id} onClick={callback}>
                <div className="breweries-card__title">{name}</div>
                <div className="breweries-card__information">{state}</div>
                <div className="breweries-card__information">{website}</div>
            </button>
        ) : (
                <div>
                    <p className="title">Brewerie selected</p>
                    <div className="breweries-card__selected" >
                        <div className="breweries-card__title">{name}</div>
                        <div className="breweries-card__information">State: {state}</div>
                        <div className="breweries-card__information">Phone: {phone}</div>
                        <div className="breweries-card__information">Website:{website}</div>
                        <button onClick={callback} className="goBack">Go Back to Breweries</button>
                    </div>
                </div>
            )
    )
}

export default BreweryCard;