import { useState } from 'react';
import Player from './Player';
import Scene from './Scene';

const Game = () => {
    const [playerLocation, setPlayerLocation] = useState({x: 100, y: 500})
    return (
        <div id="game">
            <Player location={playerLocation} />
            <Scene background="steelblue"></Scene>
            <Scene background="lightgreen"></Scene>
            <Scene background="teal"></Scene>
        </div>
    )
};

export default Game;