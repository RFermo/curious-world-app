import Earth from "../images/earth.png";
import CountryCard from "./CountryCard";
import useFetch from "./useFetch";
import {Row, Col} from "react-materialize";

const Info = () => {

    const url = "https://restcountries.eu/rest/v2/name/france";
    const {continentData: franceData} = useFetch(url);

    return (
        <div>
            <div className="container section">
                <Row className="broaden valign-wrapper">
                    <Col s={12} m={6} l={5}>
                        <img className="responsive-img rotate" src={Earth} alt="Globe rotating"></img>
                    </Col>

                    <Col s={12} m={6} l={7} push="m1 l1">
                        <h3 className="white-text intro center-align">Our world is full of amazing countries and curious people like you.</h3>
                    </Col>
                </Row>  
            </div>
            <hr></hr>

            <div className="container section">

                <Row className="broaden valign-wrapper">
                    <Col s={12} l={7} m={5} pull="l1">
                        <h3 className="white-text center-align">Broaden your knowledge by learning things about every country in the world.</h3>
                    </Col>

                    <Col className="hide-on-med-and-up before-country" s={12}>
                        <hr className="hide-on-med-and-up" />
                    </Col>

                    <Col s={12} l={5} m={7} push="m1">
                        {franceData.map((country, index) => {
                            return (
                                <CountryCard
                                    key={index}
                                    name={country.name}
                                    flag={country.flag}
                                    continent={country.region}
                                    capital={country.capital}
                                    population={country.population}
                                    subregion={country.subregion}
                                    area={country.area}
                                    languages={country.languages}
                                />
                            );
                        })}
                    </Col>
                </Row>
            </div>
        </div>
    );
}
 
export default Info;