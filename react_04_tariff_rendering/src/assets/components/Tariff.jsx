import React, { useState } from 'react';

function Tariff(props) {
    let selected = "";
    const [checked, setChecked] = useState(false);
    const handleClick = (event) => {
        setChecked(!checked);
    };
    if (checked) selected = "selected";

    return (
        <div onClick={handleClick} className={`tariff ${props.color} ${selected}`}>
            <div className="tariff__name">{props.name}</div>
            <div className="tariff__price">{props.price}</div>
            <div className="tariff__speed">до {props.speed} Мбит/сек</div>
            <div className="tariff__info">{props.info}</div>
        </div>
    );
}

export default Tariff;