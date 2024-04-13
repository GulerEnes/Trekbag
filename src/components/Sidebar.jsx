import ButtonGroup from "./ButtonGroup";
import AddItemForm from "./AddItemForm";

function Sidebar({onAddItem, onRemoveAllItems, onResetToInitial, onMarkAll}) {
	return (
		<div className="sidebar">
			<AddItemForm onAddItem={onAddItem} />

			<ButtonGroup
				onRemoveAllItems={onRemoveAllItems}
				onResetToInitial={onResetToInitial}
				onMarkAll={onMarkAll}
			/>
		</div>
	);
}

export default Sidebar;
