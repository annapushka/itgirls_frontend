import background from "../img/cancelIcon.png";

function CancelButton() {
    return (
        <button className="cancelButton">
            <img src={background} alt="save" className="cancelButton__img" />
        </button>
    );
}

export default CancelButton;