import React, { useEffect, useState } from 'react';
import BreweryCard from '../brewery-card';
import { Breweries, getBreweryData } from '../../server/server';
import './index.css';

const Brewery = () => {
    const [breweries, setBreweries] = useState<Breweries[]>([]);
    const [breweriesLoaded, setBreweriesLoaded] = useState(false);
    const [brewerySelected, setBrewerySelected] = useState<Breweries>();
    const [showBrewerySelected, setShowBrewerySelected] = useState(false);

    useEffect(() => {
        getBrewery();
    }, []);

    const getBrewery = async () => {
        const breweriesData = await getBreweryData();
        setBreweries(breweriesData);
        setBreweriesLoaded(true);
    };

    const breweryClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selected = parseInt(e.currentTarget.value);
        const brewSelected: Breweries | undefined = breweries.find(brew => brew.id === selected);
        setBrewerySelected(brewSelected);
        setShowBrewerySelected(true);
        setBreweriesLoaded(false);
    };

    const goBackToBreweries = () => {
        setBreweriesLoaded(true); 
        setShowBrewerySelected(false);
    };

    return (
        <div>
            <p className="title">Breweries</p>
            <div className="breweries"> 
            {breweriesLoaded && !showBrewerySelected && (breweries.map(brew => (
                    <BreweryCard
                        key={brew.id}
                        id={brew.id}
                        name={brew.name}
                        state={brew.state}
                        website={brew.website_url}
                        callback={breweryClicked}
                        showAllBreweries = {true}
                    />
                )))}
            {showBrewerySelected && !breweriesLoaded && brewerySelected? (
                   <BreweryCard
                   key={brewerySelected.id}
                   id={brewerySelected.id}
                   name={brewerySelected.name}
                   state={brewerySelected.state}
                   website={brewerySelected.website_url}
                   callback={goBackToBreweries}
                   showAllBreweries = {false}
               />
            ) : null}
            </div>
        </div>
    );
}

export default Brewery;