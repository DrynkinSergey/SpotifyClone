import React from 'react'
import { PlaylistContextMenuItem } from './PlaylistContextMenuItem'
import { PlaylistContextMenuItemWithSubmenu } from './PlaylistContextMenuItemWithSubmenu'

const PlaylistContextMenu = ({ classes, menuItems }, ref) => {
	return (
		<ul ref={ref} className={classes}>
			{menuItems.map(({ label, subMenuItems }) => {
				if (subMenuItems) {
					return (
						<PlaylistContextMenuItemWithSubmenu
							key={label}
							subMenuItems={subMenuItems}
						>
							{label}
						</PlaylistContextMenuItemWithSubmenu>
					)
				}

				return (
					<PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
						{label}
					</PlaylistContextMenuItem>
				)
			})}
		</ul>
	)
}

export default React.forwardRef(PlaylistContextMenu)
