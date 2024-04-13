import {useState} from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import {initialItems} from "../constants";

function App() {
	const [items, setItems] = useState(initialItems);

	const handleAddItem = (newItemText) => {
		const newItems = [
			...items,
			{id: new Date().getDate(), name: newItemText, packed: false},
		];
		setItems(newItems);
	};

	const handleMarkAll = (mark) => {
		const newItems = items.map((item) => {
			return {...item, packed: mark};
		});
		setItems(newItems);
	};

	const handleRemoveAllItems = () => setItems([]);

	const handleResetToInitial = () => setItems(initialItems);

	const handleDeleteItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const handleMarkItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) return {...item, packed: !item.packed};

			return item;
		});
		setItems(newItems);
		console.log(items);
	};

	return (
		<>
			<BackgroundHeading />

			<main>
				<Header />
				<ItemList
					items={items}
					setItems={setItems}
					onDeleteItem={handleDeleteItem}
					onMarkItem={handleMarkItem}
				/>
				<Sidebar
					onAddItem={handleAddItem}
					onRemoveAllItems={handleRemoveAllItems}
					onResetToInitial={handleResetToInitial}
					onMarkAll={handleMarkAll}
				/>
			</main>

			<Footer />
		</>
	);
}

export default App;
