import SearchButton from "./SearchButton";

function SearchBox() {
    return (
        <div className="searchBox">
            <input type="text" className="searchBox__input" placeholder="Search..." />
            <SearchButton></SearchButton>
        </div>
    );
}

export default SearchBox;