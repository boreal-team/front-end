import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/dashboard';
import { GeneralProvider } from './context/GeneralContext';
import { UserProvider } from './context/UserContext';

function App() {
	return (
		<div className='app'>
			<GeneralProvider>
				<ChakraProvider>
					<UserProvider>
						<Dashboard />
					</UserProvider>
				</ChakraProvider>
			</GeneralProvider>
		</div>
	);
}

export default App;
