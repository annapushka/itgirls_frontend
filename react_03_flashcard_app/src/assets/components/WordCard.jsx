import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function WordCard(props) {
    let action;
    if (!props.editWord) {
        action = <div className="word__control">
            <EditButton></EditButton>
            <DeleteButton></DeleteButton>
        </div>;
    } else {
        action = <div className="word__control">
            <SaveButton></SaveButton>
            <CancelButton></CancelButton>
        </div>
    }
    return (
        <div className="word">
            <div className="word__data">
                <span className="word__text">{props.english}</span>
                <span className="word__transcription">{props.transcription}</span>
                <span className="word__russian">{props.russian}</span>
                <span className="word__tags">{props.tags}</span>
            </div>
            {action}
        </div>
    );
}

export default WordCard;