const MenuCategory = ({ category, onSelect, selectedCategory }) => {
	return (
		<li
			className={`menu__category ${
				selectedCategory === category.menu_name ? 'active' : null
			}`}
			onClick={() => onSelect(category.menu_name.toLowerCase())}
		>
			<figure>
				<img src={category.menu_image} alt={category.menu_name} />
			</figure>
			<p>{category.menu_name}</p>
		</li>
	);
};

export default MenuCategory;
