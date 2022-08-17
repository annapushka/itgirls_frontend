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
        setCount(prevState => (prevState < arrWords.length - 1) ? prevState + 1 : 0);
        setLearnedWords(prevState => (prevState < arrWords.length - 1) ? prevState + 1 : arrWords.length);
    }
    const handleCountBack = () => {
        setCount(prevState => (prevState > 0) ? prevState - 1 : 0);
    }

    let userResult;
    if (learnedWords === arrWords.length) {
        userResult = <span className="learned-words__num">Keep it up! You learned <span className="learned-words__num_pink">ALL</span> the words!</span>;
    }
    else if (learnedWords === 0) {
        userResult = <span className="learned-words__num">Here goes!</span>;
    }
    else {
        userResult = <span className="learned-words__num">You learned <span className="learned-words__num_pink">{learnedWords}</span> out of {arrWords.length} today!</span>;
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
                {userResult}
            </div>
        </>
    );
}

export default CardSlider;