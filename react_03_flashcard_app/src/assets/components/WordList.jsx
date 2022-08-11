import AddButton from "./AddButton";
import WordCard from "./WordCard";

function WordList(props) {

    const cardArray = [...props.words];

    return (
        <div className="list-box">
            <div className="list">
                {
                    cardArray.map((word) =>
                        <WordCard words={cardArray} key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}></WordCard>
                    )
                }
            </div>
            <div className="list__control">
                <AddButton></AddButton>
            </div>
        </div>
    );
}

export default WordList;
