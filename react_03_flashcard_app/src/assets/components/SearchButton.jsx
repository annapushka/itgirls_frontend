import background from "../img/searchIcon.png";

function SearchButton(props) {
    return (
        <button onClick={() => props.buttonClick()} className="searchButton">
            <img src={background} alt="search" className="searchButton__img" />
        </button>
    );
}

export default SearchButton;