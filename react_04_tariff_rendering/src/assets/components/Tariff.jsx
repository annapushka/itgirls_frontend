function Tariff(props) {
    let selected = "";
    if (props.isSelected) selected = "selected";
    return (
        <div className={`tariff ${props.color} ${selected}`}>
            <div className="tariff__name">{props.name}</div>
            <div className="tariff__price">{props.price}</div>
            <div className="tariff__speed">до {props.speed} Мбит/сек</div>
            <div className="tariff__info">{props.info}</div>
        </div>
    );
}

export default Tariff;