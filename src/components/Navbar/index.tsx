import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import LogoBoreal from '../../assets/logo-boreal.svg';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { useGeneral } from '../../context/GeneralContext';
import { useUser } from '../../context/UserContext';

function NavbarComponent() {
	const { setStage, stage } = useGeneral();
	const { user } = useUser();

	function shortenEthereumAddress(address: string) {
		if (address && address.length >= 10) {
			const firstPart = address.slice(0, 6);
			const lastPart = address.slice(-5);
			return `${firstPart}...${lastPart}`;
		}
		return address;
	}
	return (
		<>
			<Navbar expand='lg' className='p-4' style={{ background: 'transparent' }}>
				<Container fluid>
					<Navbar.Brand href='#'>
						<img style={{ height: 22 }} alt='' src={LogoBoreal} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' className='menu-icon'>
						<Icon path={mdiMenu} color={'white'} size={1} />
					</Navbar.Toggle>
					<Navbar.Collapse id='navbarScroll' className='justify-content-center'>
						<Nav className='navbar-container'>
							<div
								className='text-light font-weight-bold'
								style={stage == 0 ? { opacity: 1 } : {}}
								onClick={() => setStage(0)}>
								Bridge
							</div>
							<div
								className='text-light font-weight-bold'
								style={stage == 1 ? { opacity: 1 } : {}}
								onClick={() => setStage(1)}>
								Landing
							</div>
							<div
								className='text-light font-weight-bold'
								style={stage == 2 ? { opacity: 1 } : {}}
								onClick={() => setStage(2)}>
								Staking
							</div>
							<div
								className='text-light font-weight-bold'
								style={stage == 3 ? { opacity: 1 } : {}}
								onClick={() => setStage(3)}>
								Liquid Pool
							</div>
							<div
								className='text-light font-weight-bold only-mobile'
								style={user ? { cursor: 'default' } : {}}>
								{user ? shortenEthereumAddress(user) : 'Connect wallet'}
							</div>
						</Nav>
					</Navbar.Collapse>
					<Form className='d-flex only-desktop'>
						<div
							className='navbar-button'
							style={user ? { cursor: 'default' } : {}}>
							{user ? shortenEthereumAddress(user) : 'Connect wallet'}
						</div>
					</Form>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
