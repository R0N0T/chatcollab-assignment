import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { link2 } from "../utils/constants";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
import Modal from './Modal'
import './PokemonThumbnail.css'
export const PokemonThumbnail = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [datalist, setdatalist] = useState(null);
    var cp = ""
    var kp = ""
    const { newdata } = props;  
    console.log(newdata.url)

    const [Error, setError] = useState(null);
    useEffect(() => {
        fetchpok();
    }, [])
    const fetchpok = async () => {
        try {
            const data = await fetch(
                newdata.url
            );

            const json = await data.json();
            console.log(json);
            setdatalist(json);
        } catch (err) {
            setError("We will be back shortly");
        }
    };
    if (datalist == null) {
        return <Shimmer />
    } else {
        const findCss = (each) => {
            if (each === "fire") {
                cp = "bg-red-500"
                kp = "bg-red-100"
            }
            if (each === "grass") {
                cp = "bg-green-500"
                kp = "bg-green-100"
            }
            if (each === "water") {
                cp = "bg-blue-500"
                kp = "bg-blue-100"
            }
            if (each === "bug") {
                cp = "bg-amber-500"
                kp = "bg-amber-100"
            }
            if (each === "normal") {
                cp = "bg-pink-500"
                kp = "bg-pink-100"
            }
            if (each === "electric") {
                cp = "bg-yellow-100"
                kp = "bg-yellow-300"
            }
            if (each === "poison") {
                cp = "bg-purple-500"
                kp = "bg-purple-100"
            }
            if (each === "ground") {
                cp = "bg-orange-500"
                kp = "bg-orange-100"
            }
            if (each === "fairy") {
                cp = "bg-lime-500"
                kp = "bg-lime-100"
            }
            return cp
        }
        var str="pokecard "+datalist[0].type;
        var strbtn="btn "+datalist[0].type;
        var str2="pokecard2 "+datalist[0].type;
        return (
            <div id='poke' className={datalist[0]?.type}>
                <img alt="res-logo" src={datalist[0]?.image} />
                <h3>{datalist[0]?.name.toUpperCase()}</h3>
                <h4>Type: {datalist[0]?.type.charAt(0).toUpperCase() + datalist[0]?.type.slice(1)}</h4>
                <div  onClick={() => console.log('clicked')}>
                    <button className={strbtn} onClick={() => setIsOpen(true)}>Know more..</button>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        <div className={str}>
                            <div className="pokecard-img">
                                <img src={datalist[0]?.image} alt={datalist[0]?.name} />
                                <h3 >{datalist[0]?.name}</h3>
                            </div>
                            <div className={str2}>
                                <div className="pokecard-text">
                                    <h4>Weight: <span>{datalist[0]?.weight}</span></h4>
                                    <h4>Height: <span>{datalist[0]?.height}</span></h4>
                                </div>
                                <div className="pokecard-text2">
                                    <h4>Stat1: <span> {datalist[0]?.stats[0]?.stat?.name} </span></h4>
                                    <h4>Stat2: <span> {datalist[0]?.stats[1]?.stat?.name} </span></h4>
                                    <h4>Stat3: <span> {datalist[0]?.stats[2]?.stat?.name} </span></h4>
                                    <h4>Stat4: <span> {datalist[0]?.stats[3]?.stat?.name} </span></h4>
                                    <h4>Stat5: <span> {datalist[0]?.stats[4]?.stat?.name} </span></h4>
                                    <h4>Stat6: <span> {datalist[0]?.stats[5]?.stat?.name} </span></h4>
                                </div>
                                <div className="pokecard-text3">
                                    <h4>Bs1: <span> {datalist[0]?.stats[0]?.base_stat} </span></h4>
                                    <h4>Bs2: <span> {datalist[0]?.stats[1]?.base_stat} </span></h4>
                                    <h4>Bs3: <span> {datalist[0]?.stats[2]?.base_stat} </span></h4>
                                    <h4>Bs4: <span> {datalist[0]?.stats[3]?.base_stat} </span></h4>
                                    <h4>Bs5: <span> {datalist[0]?.stats[4]?.base_stat} </span></h4>
                                    <h4>Bs6: <span> {datalist[0]?.stats[5]?.base_stat} </span></h4>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div >
        );
    }
};