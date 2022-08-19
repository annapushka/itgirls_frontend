function Message(props) {

    return (
        <div className={props.isNew}>
            <div className="tmt-3 autor">
                <img src={props.ava} alt="avatar" />
                <span>{props.user}: </span>
            </div>
            <div className="text">
                <span>{props.message}</span>
            </div>
        </div >

    );
}

export default Message;