import { useState, useEffect, useRef } from 'react';
import FullscreenButton from './FullscreenButton';
import Player from './Player';
import Scene from './Scene';

const Game = () => {
    const [playerLocation, setPlayerLocation] = useState({x: 100, y: 500});
    const [sceneNumber, setSceneNumber] = useState(0)

    const gameRef = useRef(null);

    useEffect(() =>{
        gameRef.current?.scrollTo({
            left: window.innerWidth * sceneNumber,
            top: 0, 
            behavior: 'smooth'
        })
    }, [sceneNumber]);

    useEffect(() => {
        const scene = Math.floor(playerLocation.x / window.innerWidth) 
        setSceneNumber(scene)
    }, [playerLocation])

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    setPlayerLocation(prev => {
                        return {
                            y: prev.y,
                            x: prev.x + 20
                        }
                    })
                    break;
                case "ArrowLeft":
                    setPlayerLocation(prev => {
                        return {
                            y: prev.y,
                            x: prev.x - 20
                        }
                    })
                    break;

            }
        };

        window.addEventListener('keydown', handleKeyDown)
        // return () => window.removeEventListener('keydown', handleKeyDown)
    }, []);

    return (
        <div id="game" ref={gameRef}>
            <Player location={playerLocation} />
            <FullscreenButton />
            <Scene background="steelblue"></Scene>
            <Scene background="lightgreen"></Scene>
            <Scene background="teal"></Scene>
        </div>
    )
};

export default Game;