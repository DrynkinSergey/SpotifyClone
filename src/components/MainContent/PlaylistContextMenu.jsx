import React, { useEffect, useRef } from 'react'
import { PlaylistContextMenuItem } from './PlaylistContextMenuItem'

export const PlaylistContextMenu = ({
	classes,
	menuItems,
	onClose: handleClose,
}) => {
	const menuRef = useRef(null)
	useEffect(() => {
		const handleClickAway = e => {
			if (!menuRef.current.contains(e.target)) {
				handleClose()
			}
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
		}
	})
	return (
		<ul ref={menuRef} className={classes}>
			{menuItems.map(({ label, subMenuItems }) => (
				<PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
					{label}
				</PlaylistContextMenuItem>
			))}
		</ul>
	)
}
