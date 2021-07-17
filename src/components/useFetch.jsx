import {useState, useEffect} from "react";
import {notCountries} from "../myData";

const useFetch = (url) => {

    const [continentData, setContinentData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();
    
        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
          .then(res => {

            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();

          })
          .then(data => {

            setIsPending(false);

            // Filter out islands that aren't really countries.
            const countriesData = data.filter(country => !notCountries.includes(country.name));
            setContinentData(countriesData);
            setError(null);

          })
          .catch(err => {

            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);

            }
          })
        }, 250);
    
        // abort the fetch
        return () => abortCont.abort();
    }, [url])

  return {continentData, isPending, error};
};


 
export default useFetch;