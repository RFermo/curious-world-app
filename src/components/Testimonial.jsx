import {Row, Col} from "react-materialize";

const Testimonial = (props) => {
    return (
        <div className="carousel-item valign-wrapper grey darken-4 white-text">
            <Row>
                <Col s={12} l={6}>
                    <div style={{backgroundImage: `url(${props.img})`}} className="my-avatars"></div>
                    <p className="white-text testimonial-name">{props.name}, {props.age}</p>
                </Col>

                <Col s={12} l={6} pull="l1">
                    <p className="testimonial-text">{props.decl}</p>
                </Col>
            </Row>
        </div>
    );
}
 
export default Testimonial;