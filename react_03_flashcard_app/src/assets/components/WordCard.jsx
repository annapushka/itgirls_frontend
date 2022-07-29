function WordCard(props) {
    return (
        <div className="word">
            <div className="word__data">
                <img className="word__img" src={props.img} alt={props.wordEng} />
                <span className="word__text">{props.wordEng}</span>
                <span className="word__transcription">{props.transcription}</span>
                <span className="word__translation">{props.translation}</span>
                <span className="word__topic">{props.topic}</span>
            </div>
            <div className="word__control">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div>
    );
}

export default WordCard;