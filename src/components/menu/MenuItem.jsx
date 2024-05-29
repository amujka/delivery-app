import React from 'react'

const MenuItem = ({item}) => {
  return (
	<li className='menu__item'>
		<figure>
			<img src={item.menu_image} alt={item.menu_name} />
		</figure>
		<p>{item.menu_name}</p>
	</li>
  )
}

export default MenuItem