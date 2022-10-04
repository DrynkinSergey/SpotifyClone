import React from 'react'
import { PlaylistContextMenuItem } from './PlaylistContextMenuItem'

export const PlaylistContextMenu = ({ classes, menuItems }) => {
	return (
		<ul className={classes}>
			{menuItems.map(({ label, subMenuItems }) => (
				<PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
					{label}
				</PlaylistContextMenuItem>
			))}
		</ul>
	)
}
