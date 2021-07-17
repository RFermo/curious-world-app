const Input = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="row">
            <div className="col s12 l6 offset-l3">
                <div className="input-field">
                    <i className="material-icons prefix white-text">search</i>
                    <input
                        value={searchQuery}
                        onInput={e => setSearchQuery(e.target.value)}
                        className="white-text" 
                        type="text"
                        placeholder="Search for a country"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Input;