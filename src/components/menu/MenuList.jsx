import './menu.css'
import { menu_list } from "../../assets/assets";
import Menuitem from './MenuItem'
const MenuList = () => {
  return (
	<div className='menu'>
    <h1 className='menu__title'>Explore our menu</h1>
    <p className='menu__subtitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam distinctio minima repellendus dolores laborum adipisci iusto vel pariatur, ullam aut laudantium, id et necessitatibus dolore, nulla facere doloribus tenetur aliquam?</p>
    <ul className="menu__list">
      { menu_list.map((item) => <Menuitem key={item.menu_name} item={item}/>)}
    </ul>
  </div>
  )
}

export default MenuList