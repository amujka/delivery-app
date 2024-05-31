
const MenuItem = ({item,onSelect,activeItemName}) => {
	return (
		<li className={`menu__item ${activeItemName===item.menu_name?'active':null}`}  onClick={()=>onSelect(item.menu_name)}>
			{
				item.menu_image?
					<figure>
						<img src={item.menu_image} alt={item.menu_name} />
					</figure>:
					<div className="menu__item_placeholder"></div>
			}
			<p>{item.menu_name}</p>
		</li>
	)
}

export default MenuItem