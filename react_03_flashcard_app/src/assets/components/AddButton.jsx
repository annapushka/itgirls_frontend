function AddButton(props) {
    return (
        <button onClick={() => props.buttonClick()} className="addButton">Add</button>
    );
}

export default AddButton;