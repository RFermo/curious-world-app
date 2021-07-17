import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h3 className="center-align">Sorry, that page can't be found.<i className="inline-icon material-icons hide-on-small-only">error_outline</i></h3>
            <Link to="/">
                <h5 className="center-align back-home">Back to home page!</h5>
            </Link>
        </div>
    );
}
 
export default NotFound;