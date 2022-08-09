import WordCard from "./WordCard";
import React, { useState } from 'react';
import Back from "../img/arrow_back_icon.png";
import Forward from "../img/arrow_forward_icon.png";

function CardSlider(props) {
    const [count, setCount] = useState(0);
    const { id, ...itemProps } = props.words[count];
    const arrWords = [...props.words];
    const handleCountNext = () => {
        (count < arrWords.length - 1) ? setCount(count + 1) : setCount(0);
    }
    const handleCountBack = () => {
        (count > 0) ? setCount(count - 1) : setCount(arrWords.length - 1);
    }


    return (
        <div className="card-slider">
            <button className="card-slider__btn" onClick={handleCountBack}>
                <img src={Back} alt="" className="card-slider__icon" />
            </button>
            <WordCard key={id} {...itemProps}></WordCard>
            <button className="card-slider__btn" onClick={handleCountNext}>
                <img src={Forward} alt="" className="card-slider__icon" />
            </button>
        </div>

    );
}

export default CardSlider;