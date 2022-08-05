import background from "../img/searchIcon.png";

function SearchButton() {
    return (
        <button className="searchButton">
            <img src={background} alt="search" className="searchButton__img" />
        </button>
    );
}

export default SearchButton;