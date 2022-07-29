function Hero(props) {
    return (
        <div className="hero">
            <img className="hero__img" src={process.env.PUBLIC_URL + props.img} alt="hero" />
            <div className="hero__info">
                <div className="hero__name">{props.name}</div>
                <div className="hero__universe">Вселенная: {props.universe}</div>
                <div className="hero__alterEgo">Альтер эго: {props.alterEgo}</div>
                <div className="hero__occupation">Род деятельности: {props.occupation}</div>
                <div className="hero__friends">Друзья: {props.friends}</div>
                <div className="hero__superpower">Суперсилы: {props.superpower}</div>
                <div className="hero__more" data-tooltip={props.more}> Подробнее &gt;</div>
            </div>
        </div>
    );
}

export default Hero;