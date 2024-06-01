const MenuCategory = ({ item, onSelect, activeItemName }) => {
	return (
		<li
			className={`menu__category ${
				activeItemName === item.menu_name ? 'active' : null
			}`}
			onClick={() => onSelect(item.menu_name)}
		>
			<figure>
				<img src={item.menu_image} alt={item.menu_name} />
			</figure>
			<p>{item.menu_name}</p>
		</li>
	);
};

export default MenuCategory;
