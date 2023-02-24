import Video from "./Video";
const Scene = (props) => {
    return(
        <div className="scene" style={{
            background: props.background
        }}>
            <Video url={props.url}/>
        </div>
    )
};

export default Scene;