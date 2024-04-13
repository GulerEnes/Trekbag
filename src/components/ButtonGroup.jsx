import Button from "./Button";

function ButtonGroup({onRemoveAllItems, onResetToInitial, onMarkAll}) {
	return (
		<section className="button-group">
			<Button onClick={() => onMarkAll(true)} type="secondary">
				Mark all as complete
			</Button>
			<Button onClick={() => onMarkAll(false)} type="secondary">
				Mark all as incomplete
			</Button>
			<Button onClick={onResetToInitial} type="secondary">
				Reset to initial
			</Button>
			<Button onClick={onRemoveAllItems} type="secondary">
				Remove all items
			</Button>
		</section>
	);
}

export default ButtonGroup;
