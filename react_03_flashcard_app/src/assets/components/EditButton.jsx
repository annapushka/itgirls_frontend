function EditButton(props) {
    return (
        <button onClick={() => props.buttonClick()} className="editButton">Edit</button>
    );
}

export default EditButton;