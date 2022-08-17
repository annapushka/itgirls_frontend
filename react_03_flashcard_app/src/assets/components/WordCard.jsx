import React, { useState, createRef, useEffect } from 'react';
import CancelButton from "./CancelButton";
import CheckButton from './CheckButton';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function WordCard(props) {

    const ref = createRef();

    useEffect(() => (ref !== null) ? ref.current.focus() : '', []);

    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(prevState => !prevState);
    }

    const [changed, setChanged] = useState(false);
    const handleEdit = () => {
        setChanged(prevState => !prevState);
    }

    const [changedInput, setChangedInput] = useState(false);
    const handleChangeInput = () => {
        setChangedInput(prevState => !prevState);
        editCard();
    }
    const handleDeleteChangeInput = () => {
        setChangedInput(prevState => prevState);
    }

    const [cardArray, setCardArray] = useState(props.words);

    const editCard = (editCardId, newEnglish, newTranscription, newRussian, newTags) => {
        setCardArray(prevState =>
            prevState.map(word =>
                word.id === editCardId
                    ? { ...word, english: newEnglish, transcription: newTranscription, russian: newRussian, tags: newTags }
                    : word
            )
        )
    }


    return (
        <div className="word" >
            {changed ? (
                <>
                    <div className="word__data" id={props.id}>
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
                                    <CheckButton ref={ref} handleChange={handleChange.bind(this)}></CheckButton>
                                )}
                                <span className="word__tags">{props.tags}</span>
                            </>
                        ) : (
                            <>
                                <span className="word__text">???</span>
                                <span className="word__transcription">???</span>
                                {pressed ? (
                                    <span onClick={handleChange} className="word__russian">???</span>
                                ) : (
                                    <CheckButton ref={ref} handleChange={handleChange.bind(this)}></CheckButton>
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
            )
            }
        </div >
    );
}

export default WordCard;