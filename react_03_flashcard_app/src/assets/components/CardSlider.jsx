import WordCard from "./WordCard";
import React, { useState } from 'react';
import Back from "../img/arrow_back_icon.png";
import Forward from "../img/arrow_forward_icon.png";

function CardSlider(props) {
    const [count, setCount] = useState(0);
    const { words: arrWords } = props;
    const { id, ...itemProps } = arrWords[count];

    const [learnedWords, setLearnedWords] = useState(0);

    const handleCountNext = () => {
        (count < arrWords.length - 1) ? setCount(prevState => prevState + 1) : setCount(0);
        (learnedWords < arrWords.length - 1) ? setLearnedWords(prevState => prevState + 1) : setLearnedWords(arrWords.length);
    }
    const handleCountBack = () => {
        (count > 0) ? setCount(prevState => prevState - 1) : setCount(arrWords.length - 1);
    }


    return (
        <>
            <div className="card-slider">
                <button className="card-slider__btn" onClick={handleCountBack}>
                    <img src={Back} alt="" className="card-slider__icon" />
                </button>
                <WordCard key={id} {...itemProps}></WordCard>
                <button className="card-slider__btn" onClick={handleCountNext}>
                    <img src={Forward} alt="" className="card-slider__icon" />
                </button>
            </div>
            <div className="learned-words">
                {
                    (learnedWords === arrWords.length)
                        ? <span className="learned-words__num">Keep it up! You learned <span className="learned-words__num_pink">ALL</span> the words!</span>
                        : ((learnedWords === 0)
                            ? <span className="learned-words__num">Here goes!</span>
                            : <span className="learned-words__num">You learned <span className="learned-words__num_pink">{learnedWords}</span> out of {arrWords.length} today!</span>)
                }
            </div>
        </>
    );
}

export default CardSlider;