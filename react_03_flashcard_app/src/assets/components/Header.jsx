import SearchBox from "./SearchBox";
import Img from "../img/languageIcon.png"

function Header() {
    return (
        <div className="header">
            <img src={Img} alt="logo" className="header__logo" />
            <SearchBox></SearchBox>
        </div>
    );
}

export default Header;