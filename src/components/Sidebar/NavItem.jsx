import React from 'react'

export const NavItem = ({ classes, label, icon }) => {
	return (
		<a href='/' className={classes}>
			{icon}
			<span className='ml-4 text-sm font-semibold'>{label}</span>
		</a>
	)
}
