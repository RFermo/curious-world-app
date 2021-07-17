import {Col} from "react-materialize";
import {Link} from "react-router-dom";

const Continent = (props) => {
    return (
        <Col className="continent-container" s={12} m={8} l={4} push="m2">
            <div className="center-align">
                <img className="responsive-img" src={props.img} alt={props.altText} />
                <div className="continent-name-container">
                    <Link className="continent-name btn-large btn-continent" to={props.link}><i className={props.icon}></i>{props.name}</Link>
                </div>
            </div>
        </Col>
    );
}
 
export default Continent;