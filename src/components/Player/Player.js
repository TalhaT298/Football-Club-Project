import React, { useEffect, useState } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import './Player.css'

const Player = () => {
    const [players,setPlayers]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='player-container'>
            <div>
                {
                    products.map(player => <PlayerInfo></PlayerInfo>)
                }
            </div>
            <div>
                <h4>Goal Time</h4>
            </div>
        </div>
    );
};

export default Player;