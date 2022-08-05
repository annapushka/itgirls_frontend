import React, { useState } from 'react';
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function WordCard(props) {

    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }

    const [changed, setChanged] = useState(false);
    const handleEdit = () => {
        setChanged(!changed);
    }

    const [changedInput, setChangedInput] = useState(false);
    const handleChangeInput = () => {
        setChangedInput(!changedInput);
    }
    const handleDeleteChangeInput = () => {
        setChangedInput(changedInput);
    }


    return (
        <div className="word" >
            {changed ? (
                <>
                    <div className="word__data">
                        <input className="word__input english" defaultValue={props.english} />
                        <input className="word__input transcription" defaultValue={props.transcription} />
                        <input className="word__input russian" defaultValue={props.russian} />
                        <input className="word__input tags" defaultValue={props.tags} />
                    </div>
                    <div onClick={handleEdit} className="word__control">
                        <SaveButton handleChangeInput={handleChangeInput.bind(this)}></SaveButton>
                        <CancelButton handleDeleteChangeInput={handleDeleteChangeInput.bind(this)}></CancelButton>
                    </div>
                </>
            ) : (
                <>
                    <div className="word__data">
                        {!changedInput ? (
                            <>
                                <span className="word__text">{props.english}</span>
                                <span className="word__transcription">{props.transcription}</span>
                                {pressed ? (
                                    <span onClick={handleChange} className="word__russian">{props.russian}</span>
                                ) : (
                                    <span onClick={handleChange} className="word__check">let's check...</span>
                                )}
                                <span className="word__tags">{props.tags}</span>
                            </>
                        ) : (
                            <>
                                {/* нужно сейчас изменять JSON и вписывать новые занчения? */}
                                <span className="word__text">???</span>
                                <span className="word__transcription">???</span>
                                {pressed ? (
                                    <span onClick={handleChange} className="word__russian">???</span>
                                ) : (
                                    <span onClick={handleChange} className="word__check">let's check...</span>
                                )}
                                <span className="word__tags">???</span>
                            </>
                        )}
                    </div>
                    <div className="word__control">
                        <EditButton handleEdit={handleEdit.bind(this)}></EditButton>
                        <DeleteButton></DeleteButton>
                    </div>
                </>
            )}
        </div>
    );
}

export default WordCard;