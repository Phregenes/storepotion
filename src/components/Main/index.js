import React, { useEffect, useState } from "react";
import "./styles.css";

import potions from '../../mock/potions.json'

import agingPotion from "../../assets/aging-potion.png";
import bulgeyePotion from "../../assets/bulgeye-potion.png";
import dragonPotion from "../../assets/dragon-tonic.png";
import lovePotion from "../../assets/love-potion.png";
import polyjuicePotion from "../../assets/polyjuice-potion.png";
import sleepingPotion from "../../assets/sleeping-draught.png";

const Main = () => {
    const [potions, setPotions] = useState([])
    const [isLoading, setLoading] = useState(false)

    const potionsImages = {
        "Aging Potion": agingPotion,
        "Bulgeye Potion": bulgeyePotion,
        "Dragon Tonic": dragonPotion,
        "Love Potion": lovePotion,
        "Polyjuice Potion": polyjuicePotion,
        "Sleeping Draught": sleepingPotion,
    }

const teste = async () => {
    const res = await fetch('https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json')
    return (res.json())
}

    useEffect(() => {
        setLoading(true)
        teste().then((res) => {
           const rawpotions = Object.values(res.potions);
           const potions = rawpotions.map(potion => ({
               ...potion,
               image: potionsImages[potion.name]
           }))
            setPotions(potions)
            setLoading(false)
        })
    },[])

    return (
    <div className="container">
    {
        isLoading ?
            <div id="loading"/>
            : potions.length > 0 ? (
                potions.map((potion, index) => (
                        <div key={potion.id} className="potion">
                            <img src={potion.image} alt={potion.name} className="potion--image"/>
                            <div className="potion--info">
                                <span>{potion.name + ' -'}</span>
                                <span className="potion--info--price">{' $'+potion.price}</span>
                            </div>
                        </div>
            ))
            ) : <div>Lista está vazia</div>
    }

    </div>
)};

export default Main;
