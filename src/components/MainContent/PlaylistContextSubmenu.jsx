import React from 'react'
import { PlaylistContextMenuItem } from './PlaylistContextMenuItem'

export const PlaylistContextSubmenu = ({ menuItems }) => {
	return (
		<ul className='absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default'>
			{menuItems.map(item => (
				<PlaylistContextMenuItem key={item.label}>
					{item.label}
				</PlaylistContextMenuItem>
			))}
		</ul>
	)
}
