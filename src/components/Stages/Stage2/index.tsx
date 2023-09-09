import ButtonComponent from '../../../components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BrFlag from '../../../assets/br-flag.svg';
import PolidoStakeBanner from '@lidofinance/polygon-sdk-banner';
import './styles.css';

const Stage2 = () => {
	return (
		<div className='content-container'>
			<div className='card-container'>
				<div className='card-header'>
					<div className='card-title'>Landing</div>
					<div className='address-container'>
						<div className='card-user-address'>
							<div>Connect wallet</div>
						</div>
					</div>
				</div>
				<div className='card-stake-container'>
					<Row className='landing'>
						<Col>Avaiable to stake</Col>
						<Col style={{ textAlign: 'right' }}>Boreal APR</Col>
					</Row>
					<Row className='landing-values'>
						<Col>0.0 DREXtr</Col>
						<Col style={{ textAlign: 'right', color: '#26E075' }}>4.1%</Col>
					</Row>
				</div>
				<div className='input-container'>
					<div className='country-flags'>
						<img alt='' src={BrFlag} />
					</div>
					<input className='input' type='text' placeholder='DREXtr amount' />
					<div>
						<div
							className='landing-right'
							style={{ borderRadius: '0 0 12px 0' }}>
							<div className='small-bridge-buttons'>25%</div>
							<div className='small-bridge-buttons'>50%</div>
							<div className='small-bridge-buttons'>MAX</div>
						</div>
					</div>
				</div>

				<div style={{ margin: '12px 0' }}>
					<ButtonComponent onChange={() => alert('CLICKED')} text='Submit' />
				</div>

				<div className='card-bridge-fees-container'>
					<div className='item'>
						<div className='item-left'>You will receive</div>
						<div className='item-right'>
							<div>0 wstETH</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-left'>Exchange rate</div>
						<div className='item-right'>
							<div>1 DREXtr = 0,0004 wstETH</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-left'>Max transaction cost</div>
						<div className='item-right'>
							<div>$5.11</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-left'>Reward fee</div>
						<div className='item-right'>
							<div>10%</div>
						</div>
					</div>
				</div>
			</div>
			<div className='banner-container'>
				<PolidoStakeBanner direction='horizontal' />
			</div>
		</div>
	);
};

export default Stage2;
