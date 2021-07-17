import {useParams} from "react-router";
import {useState} from "react";
import {Row, Col} from "react-materialize";
import Input from "./Input";
import CountryCard from "./CountryCard";
import Loading from "./Loading";
import useFetch from "./useFetch";

// Possible fix: on an unsuccessful country search the user should get a message stating that no countries matched their search.

const Countries = () => {

    const {id} = useParams();
    const url = "https://restcountries.eu/rest/v2/region/" + id + "?fields=name;capital;flag;region;subregion;population;area;languages";

    const filterCountries = (countries, query) => {
        if (!query) {
            return countries;
        }
    
        return countries.filter((country) => {
            const lowerCased = query.toLowerCase();
            const capitalizedCountry = lowerCased[0].toUpperCase() + lowerCased.slice(1); // ITALY, italy or iTaLy. Anything works.
            return (country.name.includes(capitalizedCountry));
        });
    };

    const {continentData, isPending, error} = useFetch(url);
    const [searchQuery, setSearchQuery] = useState('');
    const filteredCountries = filterCountries(continentData, searchQuery);

    return (
        <div className="container countries">
            
            <Input
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {isPending && <Loading />}
            {error && <div className="center-align error-message"><h4>Could not fetch data. Please try again later.</h4></div>}

            {filteredCountries && (
                <Row>
                    {filteredCountries.map((country, index) => {

                        if (id === "americas") {
                            country.region = "America" // America instead of Americas
                        }

                        return (
                            <Col s={12} m={6} l={4} key={index}>
                                <CountryCard
                                    name={country.name}
                                    flag={country.flag}
                                    continent={country.region}
                                    capital={country.capital}
                                    population={country.population}
                                    subregion={country.subregion}
                                    area={country.area}
                                    languages={country.languages}
                                />
                            </Col>
                        );
                    })}
                </Row>
            )}
        </div>
    );
};
 
export default Countries;