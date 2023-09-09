/* eslint-disable @typescript-eslint/no-redeclare */
import BrIcon from '../../../assets/br-flag.svg';
import EthIcon from '../../../assets/eth-icon.svg';
import PolidoStakeBanner from '@lidofinance/polygon-sdk-banner';
import './styles.css';

const Stage4 = () => {
	return (
		<>
			<div className='content-container larger-container'>
				<div className='display-row'>
					<div>teste</div>
					<div className='column-cards'>
						<div className='card-container'>
							<div className='card-header'>
								<div className='card-title'>Liquid Pool</div>
							</div>
							<div
								style={{ marginTop: '32px' }}
								className='info-main-container'>
								<div className='liquid-pool-container'>
									<div className='liquid-pool-left'>
										<img alt='' src={BrIcon} style={{ width: '22px' }} />
										<span>DREXtr</span>
									</div>
									<div style={{ color: '#9b9b98', fontWeight: 600 }}>
										Balance: <span style={{ color: 'white' }}>0</span>
									</div>
								</div>
								<hr className='solid-line' />
								<div className='liquid-pool-container'>
									<div className='liquid-pool-left'>
										<img alt='' src={BrIcon} style={{ width: '22px' }} />
										<span>DREXtr</span>
									</div>
									<div style={{ color: '#9b9b98', fontWeight: 600 }}>
										Balance: <span style={{ color: 'white' }}>0</span>
									</div>
								</div>
							</div>
						</div>
						<div className='card-container'>
							<div className='card-header'>
								<div className='card-title'>Unredeemed Fees</div>
							</div>
							<div
								style={{ marginTop: '32px' }}
								className='info-main-container'>
								<div className='liquid-pool-container'>
									<div className='liquid-pool-left'>
										<img alt='' src={BrIcon} style={{ width: '22px' }} />
										<span>DREXtr</span>
									</div>
									<div style={{ color: '#9b9b98', fontWeight: 600 }}>
										Balance: <span style={{ color: 'white' }}>0</span>
									</div>
								</div>
								<hr className='solid-line' />
								<div className='liquid-pool-container'>
									<div className='liquid-pool-left'>
										<img alt='' src={BrIcon} style={{ width: '22px' }} />
										<span>DREXtr</span>
									</div>
									<div style={{ color: '#9b9b98', fontWeight: 600 }}>
										Balance: <span style={{ color: 'white' }}>0</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Stage4;