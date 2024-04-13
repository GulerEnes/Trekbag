import {useRef, useState} from "react";
import Button from "./Button";

function AddItemForm({onAddItem}) {
	const [itemText, setItemText] = useState("");
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		// basic validation
		if (!itemText) {
			alert("Item can't be empty");
			inputRef.current.focus();
			return;
		}

		onAddItem(itemText);
		setItemText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item</h2>

			<input
				ref={inputRef}
				onChange={(e) => setItemText(e.target.value)}
				value={itemText}
				autoFocus
			/>

			<Button>Add to list</Button>
		</form>
	);
}

export default AddItemForm;
