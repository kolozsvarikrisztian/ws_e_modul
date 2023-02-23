import avatar from "./assets/avatarbg.png";

const Player = (props) => {
    return (
        <div id="player" style={{
            left: props.location.x,
            top: props.location.y
        }}>
        <img src={avatar} alt="" />
        </div>
    );
}

export default Player