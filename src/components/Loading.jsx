import {Preloader} from "react-materialize";

const Loading = () => {
    return (
        <div className="center-align">
            <Preloader
                active
                color="yellow"
            />
        </div>
    );
}
 
export default Loading;