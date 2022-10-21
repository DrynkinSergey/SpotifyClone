import React, { useRef, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import PlaylistContextMenu from './PlaylistContextMenu'

export const PlaylistContextMenuItemWithSubmenu = ({
	children: label,
	subMenuItems,
}) => {
	const [menuState, setMenuState] = useState({
		isOpen: false,
		positionClasses: '',
	})
	let menuCloseTimer = null
	const menuOpenRef = useRef(null)

	function getMenuPositionClasses() {
		return `${getMenuPositionXClass()} ${getMenuPositionYClass()}`
	}

	function getMenuPositionXClass() {
		const menuItem = menuOpenRef.current
		const menuWidth = menuItem.offsetWidth
		const windowWidth = window.innerWidth
		const menuItemCoordinateEnd = menuItem.getBoundingClientRect().right
		const shouldMoveToLeft = menuWidth > windowWidth - menuItemCoordinateEnd

		return shouldMoveToLeft ? 'right-full' : 'left-full'
	}
	function getMenuPositionYClass() {
		const menuItem = menuOpenRef.current
		const menuHeight = menuItem.offsetHeight * subMenuItems.length
		const windowHeight = window.innerHeight
		const menuItemCoordinateEnd = menuItem.getBoundingClientRect().top
		const shouldMoveToUp = menuHeight > windowHeight - menuItemCoordinateEnd

		return shouldMoveToUp ? 'bottom-0' : 'top-0'
	}
	function startCloseContextMenu() {
		menuCloseTimer = setTimeout(closeContextMenu, 200)
	}
	function openContextMenu() {
		if (menuCloseTimer) {
			clearTimeout(menuCloseTimer)
			return
		}
		setMenuState({
			isOpen: true,
			positionClasses: getMenuPositionClasses(),
		})
	}
	function closeContextMenu() {
		setMenuState({
			isOpen: false,
			positionClasses: '',
		})
	}

	return (
		<li
			ref={menuOpenRef}
			onMouseEnter={openContextMenu}
			onMouseLeave={startCloseContextMenu}
			className='relative'
		>
			<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center '>
				{label}
				<ChevronRightIcon className='h-4 w-4' />
			</button>

			{menuState.isOpen && (
				<PlaylistContextMenu
					menuItems={subMenuItems}
					classes={`absolute   bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default  ${menuState.positionClasses}`}
				/>
			)}
		</li>
	)
}
