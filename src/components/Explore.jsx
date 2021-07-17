import {Row} from "react-materialize";
import Typewriter from "typewriter-effect";
import Continent from "./Continents";
import {continentInfo} from "../myData";

const Explore = () => {
    return ( 
        <div className="explore-container container">
            <div className="continent-select center-align">
                <Typewriter
                    options={{
                        delay: 80
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Select a continent!")
                        .callFunction((state) => {
                            state.elements.cursor.style.display = "none";
                        })
                        .start();
                    }}
                >
                    
                </Typewriter>
                <hr />
            </div>

            <Row>
                {continentInfo.map((continent) => {
                    return (
                        <Continent
                            key={continent.id}
                            name={continent.name}
                            img={continent.img}
                            altText={continent.altText}
                            link={continent.link}
                            icon={continent.icon}
                        />
                    );
                })}
            </Row>
        </div>
    );
}
 
export default Explore;
