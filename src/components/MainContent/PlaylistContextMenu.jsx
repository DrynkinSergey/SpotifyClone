import React from 'react'
import { PlaylistContextMenuItem } from './PlaylistContextMenuItem'

const PlaylistContextMenu = ({ classes, menuItems }, ref) => {
	return (
		<ul ref={ref} className={classes}>
			{menuItems.map(({ label, subMenuItems }) => (
				<PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
					{label}
				</PlaylistContextMenuItem>
			))}
		</ul>
	)
}

export default React.forwardRef(PlaylistContextMenu)
