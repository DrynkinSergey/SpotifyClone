import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { Sidebar } from './components/Sidebar/Sidebar'
import { SidebarOverlay } from './components/Sidebar/SidebarOverlay'
import { SignUp } from './components/SignUp'

function App() {
	return (
		<>
			<div className='flex flex-grow overflow-auto'>
				<Sidebar />
				<SidebarOverlay />
				<div className='flex-1 overflow-auto'>
					<Header />
					<MainContent />
				</div>
			</div>
			<SignUp />
		</>
	)
}

export default App
