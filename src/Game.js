import { useState, useEffect, useRef } from 'react';
import FullscreenButton from './FullscreenButton';
import Player from './Player';
import Scene from './Scene';
import Video from './Video';

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
            e.preventDefault();
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

        const handleDblClick = (e) => {
            setPlayerLocation(prev => {
                let offset = Math.floor(prev.x / window.innerWidth) * window.innerWidth;
                return {
                    y: e.y - 30,
                    x: offset + e.x - 70
                }
            })
        };

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('dblclick', handleDblClick)
        // return () => window.removeEventListener('keydown', handleKeyDown)
    }, []);

    return (
        <div id="game" ref={gameRef}>
            <Player location={playerLocation} />
            <FullscreenButton />
            <Scene background="steelblue" url="https://www.youtube.com/embed/GK_lwShM590"></Scene>
            <Scene background="lightgreen" url="https://www.youtube.com/embed/giFpWDRKCq0"></Scene>
            <Scene background="teal" url="https://www.youtube.com/embed/GK_lwShM590"></Scene>
        </div>
    )
};

export default Game;