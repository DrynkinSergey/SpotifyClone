import React from 'react'

export const SidebarOverlay = () => {
	return (
		<a
			href='/'
			className='fixed inset-0 bg-black opacity-0 peer-target:opacity-50 pointer-events-none peer-target:pointer-events-auto z-20 lg:hidden cursor-default transition-opacity'
		>
			{' '}
		</a>
	)
}
