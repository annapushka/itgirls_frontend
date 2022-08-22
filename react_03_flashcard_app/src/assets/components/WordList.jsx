import AddButton from "./AddButton";
import WordCard from "./WordCard";

function WordList(props) {

    const cardArray = [...props.words];

    return (
        <div className="list-box">
            <div className="list">
                {
                    cardArray.filter(word => {
                        if (props.saerchTearm === '') { return word }
                        else if (word.english.toLowerCase().includes(props.saerchTearm.toLowerCase())) { return word }
                    }).map((word) =>
                        <WordCard words={cardArray} key={word.id} {...word}></WordCard>
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
