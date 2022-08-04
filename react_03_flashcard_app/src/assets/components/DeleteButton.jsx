function DeleteButton(props) {
    return (
        <button onClick={() => props.buttonClick()} className="deleteButton">Delete</button>
    );
}

export default DeleteButton;