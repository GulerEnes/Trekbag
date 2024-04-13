function ItemList({items, onDeleteItem, onMarkItem}) {
	return (
		<ul>
			{items.map((item) => {
				return (
					<Item
						onMarkItem={onMarkItem}
						onDeleteItem={onDeleteItem}
						key={item.id}
						item={item}
					/>
				);
			})}
		</ul>
	);
}

function Item({item, onDeleteItem, onMarkItem}) {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => onMarkItem(item.id)}
					type="checkbox"
					checked={item.packed}
				/>
				{item.name}
			</label>

			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

export default ItemList;
