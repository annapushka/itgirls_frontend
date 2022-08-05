import background from "../img/cancelIcon.png";

function CancelButton(props) {
    return (
        <button onClick={props.handleDeleteChangeInput} className="cancelButton">
            <img src={background} alt="save" className="cancelButton__img" />
        </button>
    );
}

export default CancelButton;