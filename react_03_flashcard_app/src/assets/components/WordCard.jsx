import React, { useState, createRef, useEffect } from 'react';
import CancelButton from "./CancelButton";
import CheckButton from './CheckButton';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function WordCard(props) {

    //translation check
    const [pressed, setPressed] = useState(false);
    // changing word information
    const [isChanged, setChanged] = useState(false);
    //word information states
    const [data, setData] = useState({
        id: props.id,
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tags: props.tags
    });
    const [isVerified, setValid] = useState(true);
    //will the information about the word be changed
    const [isChangedInput, setChangedInput] = useState(false);
    //work with an array of words on change
    const [cardArray, setCardArray] = useState(props.words);


    //disabled indicator
    let isDisabled = "";


    //translation check handler
    const handleChange = () => {
        setPressed(prevState => !prevState);
    }
    // changing word information handler
    const handleEdit = () => {
        setChanged(prevState => !prevState);
    }
    //word information change handler
    function handleChangeData(e) {
        const name = e.target.name;
        const info = e.target.value;
        if (isValid(info)) {
            setValid(true);
            e.target.className = 'word__input';
            setData({ ...data, [name]: info });
        } else {
            e.target.className = 'word__input notValid';
            setValid(false);
            setData({ ...data, [name]: info });
        }
    }
    //word general information change handler
    const handleChangeInput = (e) => {
        e.preventDefault();
        if (isVerified) {
            alert(JSON.stringify(data));
            setChangedInput(true);
            editCard();
        } else {
            isDisabled = "disabled";
            setChanged(prevState => !prevState);
        }
    }
    //reset changes
    const handleDeleteChangeInput = () => {
        setChangedInput(false);
    }
    //work with an array of words on change
    const editCard = (editCardId, newEnglish, newTranscription, newRussian, newTags) => {
        setCardArray(prevState =>
            prevState.map(word =>
                word.id === editCardId
                    ? { ...word, english: newEnglish, transcription: newTranscription, russian: newRussian, tags: newTags }
                    : word
            )
        )
    }


    //checking the entered new information about the word
    function isValid(element) {
        return (element.length > 0) ? true : false;
    }


    //focus on check button
    const ref = createRef();
    useEffect(() => (ref !== null) ? ref.current.focus() : '', []);


    return (
        <div className="word" >
            {isChanged ? (
                <>
                    {!isVerified && <div className="error">Please fill in all fields correctly...</div>}
                    <div className="word__data" id={props.id}>
                        <input className='word__input' value={data.english} name='english' onChange={handleChangeData} />
                        <input className='word__input' value={data.transcription} name='transcription' onChange={handleChangeData} />
                        <input className='word__input' value={data.russian} name='russian' onChange={handleChangeData} />
                        <input className='word__input' value={data.tags} name='tags' onChange={handleChangeData} />
                    </div>
                    <div onClick={handleEdit} className="word__control">
                        <SaveButton disabled={isDisabled} handleChangeInput={handleChangeInput} />
                        <CancelButton handleDeleteChangeInput={handleDeleteChangeInput} />
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
                                    <CheckButton ref={ref} handleChange={handleChange} />
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
                                    <CheckButton ref={ref} handleChange={handleChange} />
                                )}
                                <span className="word__tags">***</span>
                            </>
                        )}
                    </div>
                    <div className="word__control">
                        <EditButton handleEdit={handleEdit} />
                        <DeleteButton />
                    </div>
                </>
            )
            }
        </div >
    );
}

export default WordCard;