import AddButton from "./AddButton";
import WordCard from "./WordCard";

const words = [];

function WordList(props) {
    return (
        <div className="list">
            {
                words.map((word) =>
                    <WordCard wordEng={word.wordEng} img={word.img} transcription={word.transcription} translation={word.translation} topic={word.topic}></WordCard>
                )
            }
            <div className="list__control">
                <AddButton></AddButton>
            </div>
        </div>

    );
}

export default WordList;
