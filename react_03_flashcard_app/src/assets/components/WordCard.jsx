import React, { useState, createRef, useEffect } from 'react';
import CancelButton from "./CancelButton";
import CheckButton from './CheckButton';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function WordCard(props) {

    //focus on check button
    const ref = createRef();
    useEffect(() => (ref !== null) ? ref.current.focus() : '', []);

    //translation check
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(prevState => !prevState);
    }

    // changing word information
    const [isChanged, setChanged] = useState(false);
    const handleEdit = () => {
        setChanged(prevState => !prevState);
    }

    //word information states
    const [data, setData] = useState({
        id: props.id,
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tags: props.tags
    });

    const [isVerified, setValid] = useState(true);

    //invalid indicator
    let isValidClass = "";

    //disabled indicator
    let isDisabled = "";

    //checking the entered new information about the word
    function isValid(element) {
        return (element.length > 0) ? true : false;
    }

    //word information change handler
    function handleChangeData(e) {
        const name = e.target.name;
        const info = e.target.value;
        if (isValid(info)) {
            setValid(true);
            setData({ ...data, [name]: info });
        } else {
            e.target.className = e.target.className + "notValid";
            setValid(false);
        }
    }

    //will the information about the word be changed
    const [isChangedInput, setChangedInput] = useState(false);

    //word general information change handler
    const handleChangeInput = (e) => {
        e.preventDefault();
        if (isVerified) {
            const modifiedWord = data;
            alert(JSON.stringify(modifiedWord));
            setChangedInput(prevState => !prevState);
            editCard();
        } else {
            isDisabled = "desabled";
        }
    }

    //reset changes
    const handleDeleteChangeInput = () => {
        setChangedInput(prevState => prevState);
    }

    //work with an array of words on change
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
            {isChanged ? (
                <>
                    {!isVerified && <div className="error">Please fill in all fields correctly...</div>}
                    <div className="word__data" id={props.id}>
                        <input className={`word__input ${isValidClass}`} value={data.english} name='english' onChange={handleChangeData} />
                        <input className={`word__input ${isValidClass}`} value={data.transcription} name='transcription' onChange={handleChangeData} />
                        <input className={`word__input ${isValidClass}`} value={data.russian} name='russian' onChange={handleChangeData} />
                        <input className={`word__input ${isValidClass}`} value={data.tags} name='tags' onChange={handleChangeData} />
                    </div>
                    <div onClick={handleEdit} className="word__control">
                        <SaveButton desabled={isDisabled} handleChangeInput={handleChangeInput}></SaveButton>
                        <CancelButton handleDeleteChangeInput={handleDeleteChangeInput}></CancelButton>
                    </div>
                </>
            ) : (
                <>
                    <div className="word__data">
                        {!isChangedInput ? (
                            <>
                                <span className="word__text">{props.english}</span>
                                <span className="word__transcription">{props.transcription}</span>
                                {pressed ? (
                                    <span onClick={handleChange} className="word__russian">{props.russian}</span>
                                ) : (
                                    <CheckButton ref={ref} handleChange={handleChange}></CheckButton>
                                )}
                                <span className="word__tags">{props.tags}</span>
                            </>
                        ) : (
                            <>
                                <span className="word__text">***</span>
                                <span className="word__transcription">***</span>
                                {pressed ? (
                                    <span onClick={handleChange} className="word__russian">***</span>
                                ) : (
                                    <CheckButton ref={ref} handleChange={handleChange}></CheckButton>
                                )}
                                <span className="word__tags">***</span>
                            </>
                        )}
                    </div>
                    <div className="word__control">
                        <EditButton handleEdit={handleEdit}></EditButton>
                        <DeleteButton></DeleteButton>
                    </div>
                </>
            )
            }
        </div >
    );
}

export default WordCard;