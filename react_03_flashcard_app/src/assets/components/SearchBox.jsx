import SearchButton from "./SearchButton";

function SearchBox() {
    return (
        <div className="searchBox">
            <input type="text" className="searcnBox__input" />
            <SearchButton></SearchButton>
        </div>
    );
}

export default SearchBox;