import ButtonGroup from "./ButtonGroup";
import AddItemForm from "./AddItemForm";

function Sidebar() {
	return (
		<div className="sidebar">
			<AddItemForm />

			<ButtonGroup />
		</div>
	);
}

export default Sidebar;
