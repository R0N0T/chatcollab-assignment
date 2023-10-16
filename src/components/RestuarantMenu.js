import React, { useState } from 'react'
import { useEffect } from 'react'
import { api1, api2 } from '../utils/constants'
import { useParams } from 'react-router-dom';
import { Shimmer } from "./Shimmer";
const RestuarantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(api1 + resId + api2);
        const json_d = await data.json();
        console.log(json_d);
        setresInfo(json_d.data);
    }
    if (resInfo === null) {
        return <Shimmer />;
    }
    const names = resInfo?.cards[0]?.card?.card?.info?.name;
    const address = resInfo?.cards[0]?.card?.card?.info?.areaName;
    const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className='menu'>
            <h1>{names}</h1>
            <h2>{address}</h2>
            <ul>
                {itemCards.map(item => <li>{item.card.info.name}</li>)}
                <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
            </ul>
        </div>
    )
}

export default RestuarantMenu;