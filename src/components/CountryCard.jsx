const CountryCard = (props) => {

    return (
        <div>
            <div className="country-name center-align">
                <h3>{props.name}</h3>
            </div>
            <img className="responsive-img" src={props.flag} alt="Country" />

            <div className="country-info white">
                <ul className="browser-default">
                    
                    <li className="black-text">
                        <p>Continent: {props.continent}</p>
                    </li>
                    <hr className="link-divider"  />
                
                    <li className="black-text">
                        <p>Capital: {props.capital}</p>
                    </li>
                    <hr className="link-divider" />
                    
                    <li className="black-text">
                        <p>Population: {props.population}</p>
                    </li> 
                    <hr className="link-divider" />
                    
                    <li className="black-text">
                        <p>Subregion: {props.subregion}</p>
                    </li>
                    <hr className="link-divider" />
                    
                    <li className="black-text">
                        <p>Area: {props.area} km2</p>
                    </li>
                    <hr className="link-divider" />
                    
                    <li className="black-text">
                        <p>
                            Languages: {' '}
                            {props.languages.map((language, index) => {
                                if (index === props.languages.length - 1) {
                                    return (language.name) // prevents comma on last language
                                }

                                return (language.name + ", ")
                            })}
                        </p>
                    </li> 
                </ul>
            </div>
        </div>
    );
}
 
export default CountryCard;