<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3Provider } from './context/Web3Context';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/dashboard';
import { GeneralProvider } from './context/GeneralContext';
import Login from './pages/login';

function App() {
	return (
		<div className='app'>
			<GeneralProvider>
				<ChakraProvider>
					<Web3Provider>
						<UserProvider>
							<Dashboard />
							{/*
							<Login />
								
							
							*/}
							{/* <PolidoStakeBanner direction='horizontal' /> */}
							{/* 
						<div style={{height: '100vh'}}>
							<iframe
								src='https://stake.lido.fi/?ref=0x3285aA46AC203ad542b6AFFC597D66dF24bE1684'
								title='Lido Staking App'
								height='100%'
								width='100%'
							/>
						</div>
						*/}
						</UserProvider>
					</Web3Provider>
				</ChakraProvider>
			</GeneralProvider>
		</div>
	);
=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/dashboard";
import { GeneralProvider } from "./context/GeneralContext";

function App() {
  return (
    <div className="app">
      <GeneralProvider>
        <ChakraProvider>
          <Dashboard />
        </ChakraProvider>
      </GeneralProvider>
    </div>
  );
>>>>>>> 36b0f7c7c087df3625a4b334baf3455ee9436246
}

export default App;
