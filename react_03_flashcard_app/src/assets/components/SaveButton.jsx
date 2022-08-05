import background from "../img/saveIcon.png";

function SaveButton(props) {
    return (
        <button onClick={props.handleChangeInput} className="saveButton">
            <img src={background} alt="save" className="saveButton__img" />
        </button>
    );
}

export default SaveButton;