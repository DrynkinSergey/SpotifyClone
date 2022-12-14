import React, { useEffect, useRef } from 'react'
import { PlaylistButtonPlay } from './PlaylistButtonPlay'
import PlaylistContextMenu from './PlaylistContextMenu'
import { PlaylistCover } from './PlaylistCover'
import { PlaylistDescription } from './PlaylistDescription'
import { PlaylistTitle } from './PlaylistTitle'

const clickPosition = { x: null, y: null }

export const Playlist = ({
	classes,
	coverUrl,
	title,
	description,
	toggleScrolling,
}) => {
	const menuItems = [
		{ label: 'Add to Your Library ' },
		{
			label: 'Share',
			subMenuItems: [
				{ label: 'Copy link to playlist' },
				{ label: 'Embed playlist' },
			],
		},
		{ label: 'About recommendations' },
		{ label: 'Open in Desktop app' },
	]
	const [isContextMenuOpen, setIsContextMenuOpen] = React.useState(false)
	const contextMenuRef = useRef(null)

	const bgClasses = isContextMenuOpen
		? 'bg-[#272727] '
		: 'bg-[#181818] hover:bg-[#272727]'

	function contextMenuHandler(e) {
		e.preventDefault()
		clickPosition.x = e.clientX
		clickPosition.y = e.clientY
		setIsContextMenuOpen(true)
	}
	function updateContextMenuVertical() {
		const menuHeight = contextMenuRef.current.offsetHeight
		const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y
		contextMenuRef.current.style.top = shouldMoveUp
			? `${clickPosition.y - menuHeight}px`
			: `${clickPosition.y}px`
	}
	function updateContextMenuHorizontal() {
		const menuWidth = contextMenuRef.current.offsetWidth
		const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x
		contextMenuRef.current.style.left = shouldMoveLeft
			? `${clickPosition.x - menuWidth}px`
			: `${clickPosition.x}px`
	}
	function updateContextMenuPosition() {
		updateContextMenuHorizontal()
		updateContextMenuVertical()
	}

	useEffect(() => {
		toggleScrolling(!isContextMenuOpen)

		if (isContextMenuOpen) {
			updateContextMenuPosition()
		}
	})
	useEffect(() => {
		if (!isContextMenuOpen) return
		const handleClickAway = e => {
			if (!contextMenuRef.current.contains(e.target)) {
				closeContextMenu()
			}
		}
		const handleEsc = e => {
			if (e.keyCode === 27) {
				closeContextMenu()
			}
		}

		document.addEventListener('mousedown', handleClickAway)
		document.addEventListener('keydown', handleEsc)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
			document.addEventListener('keydown', handleEsc)
		}
	})

	const closeContextMenu = () => {
		setIsContextMenuOpen(false)
	}

	return (
		<a
			onClick={e => e.preventDefault()}
			onContextMenu={contextMenuHandler}
			href='/'
			className={`relative p-4 rounded-md  duration-200 group ${bgClasses} ${classes}`}
		>
			<div className='relative'>
				<PlaylistCover url={coverUrl} />
				<PlaylistButtonPlay />
			</div>
			<PlaylistTitle title={title} />
			<PlaylistDescription description={description} />
			{isContextMenuOpen && (
				<PlaylistContextMenu
					ref={contextMenuRef}
					menuItems={menuItems}
					classes='fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 '
				/>
			)}
		</a>
	)
}
