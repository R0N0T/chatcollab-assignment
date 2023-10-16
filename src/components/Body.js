import { data } from "../utils/constants";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { PokemonThumbnail } from "./PokemonThumbnail";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import './Body.css'
export const Body = () => {
    const [list_rest, setlist_rest] = useState([]);
    const [err, setError] = useState(null);
    const [page, setPage] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"); // Track the current page
    const [temppage, settemppage] = useState("");

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                page
            );

            const json = await response.json();
            const nextlink = json[0]?.next;
            settemppage(nextlink);
            const newPokemonList = json[0]?.results;
            const nn = list_rest.concat(newPokemonList);
            const newlist = [...list_rest, ...newPokemonList]
            console.log(newPokemonList);
            setlist_rest(nn);

        } catch (err) {
            setError("We will be back shortly");
        }
    };

    const handleLoadMoreClick = () => {
        setPage(temppage);
        console.log(temppage); 
    };

    return list_rest.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            <div className='container'>
                {list_rest.map((each) => (
                    <PokemonThumbnail newdata={each} key={each.id} />
                ))}
            </div>
            <button className='load-more' onClick={handleLoadMoreClick}>
                More Pokemons
            </button>
        </div>
    );
};
