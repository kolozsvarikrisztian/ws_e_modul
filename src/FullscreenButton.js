import button from './assets/fullscreen.png';

const FullscreenButton = () => {
    const onClick = () => {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen()
    };
    return <img src={button} id="fullscreen-button" alt="fullscreen-button" onClick={onClick}/>;
};

export default FullscreenButton;