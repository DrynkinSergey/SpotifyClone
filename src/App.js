import { useEffect, useRef } from 'react'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { Sidebar } from './components/Sidebar/Sidebar'
import { SidebarOverlay } from './components/Sidebar/SidebarOverlay'
import { SignUp } from './components/SignUp'

function App() {
	const contentWrapperRef = useRef(null)
	let isScrollEnable = true

	function toggleScrolling(isEnable) {
		isScrollEnable = isEnable
	}

	function handleScroll(e) {
		if (isScrollEnable) return
		e.preventDefault()
		e.stopPropagation()
	}

	useEffect(() => {
		const contentWrapper = contentWrapperRef.current
		contentWrapper.addEventListener('wheel', handleScroll)
		return () => contentWrapper.removeEventListener('wheel', handleScroll)
	})
	return (
		<>
			<div className='flex flex-grow overflow-auto'>
				<Sidebar />
				<SidebarOverlay />
				<div className='flex-1 overflow-auto' ref={contentWrapperRef}>
					<Header />
					<MainContent toggleScrolling={toggleScrolling} />
				</div>
			</div>
			<SignUp />
		</>
	)
}

export default App
