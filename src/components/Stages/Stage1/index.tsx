import TransferIcon from '../../../assets/transfer-icon.svg';
import ButtonComponent from '../../../components/Button';
import './styles.css';

const Stage1 = () => {
	return (
		<div className='content-container'>
			<div className='card-container'>
				<div className='card-header'>
					<div className='card-title'>Bridge</div>
					<div className='address-container'>
						<div className='card-user-address'>
							<div>Connect wallet</div>
						</div>
					</div>
				</div>
				<div className='card-subtitle'>Transfer from</div>
				<div className='card-bridge-container'>
					<div className='bridge-subcomponent'>
						<div className='bridge-selector'>
							<div>ICON</div>
							<select name='cars' id='cars'>
								<option value='volvo'>Volvo</option>
								<option value='saab'>Saab</option>
								<option value='opel'>Opel</option>
								<option value='audi'>Audi</option>
							</select>{' '}
						</div>
						<div className='bridge-right'>Balance: 0</div>
					</div>
				</div>
				<div className='card-bridge-container'>
					<div className='bridge-subcomponent'>
						<div
							className='bridge-selector'
							style={{ borderRadius: '0 0 0 12px' }}>
							<div>ICON</div>
							<select name='cars' id='cars'>
								<option value='volvo'>Volvo</option>
								<option value='saab'>Saab</option>
								<option value='opel'>Opel</option>
								<option value='audi'>Audi</option>
							</select>{' '}
						</div>
						<div
							className='bridge-right'
							style={{ borderRadius: '0 0 12px 0' }}>
							<div
								style={{
									fontSize: 24,
									fontWeight: 600,
									width: '100%',
									textAlign: 'left',
								}}>
								33
							</div>
							<div className='small-bridge-buttons'>25%</div>
							<div className='small-bridge-buttons'>50%</div>
							<div className='small-bridge-buttons'>MAX</div>
						</div>
					</div>
				</div>
				<div className='only-icon-center'>
					<img alt='' src={TransferIcon} />
				</div>
				<div className='card-subtitle' style={{ paddingTop: 0 }}>
					Transfer to
				</div>
				<div className='card-bridge-container'>
					<div className='bridge-subcomponent'>
						<div className='bridge-selector'>
							<div>ICON</div>
							<select name='cars' id='cars'>
								<option value='volvo'>Volvo</option>
								<option value='saab'>Saab</option>
								<option value='opel'>Opel</option>
								<option value='audi'>Audi</option>
							</select>{' '}
						</div>
						<div className='bridge-right'>
							<div
								style={{
									fontSize: 24,
									fontWeight: 600,
									width: '100%',
									textAlign: 'left',
								}}>
								0,0004
							</div>
							<div
								style={{
									width: '100%',
									textAlign: 'right',
								}}>
								Balance: 0
							</div>
						</div>
					</div>
					<div className='bridge-subcomponent'>
						<div
							className='bridge-selector'
							style={{
								width: '100%',
								borderRadius: '0 0 12px 12px',
								color: 'gray',
								fontSize: 12,
								fontWeight: 600,
							}}>
							<div>
								Adress: <span style={{ color: 'white' }}>OxmUas...0508B</span>
							</div>
						</div>
					</div>
				</div>
				<div className='card-bridge-fees-container'>
					<div className='item'>
						<div className='item-left'>Est. Gas Fees</div>
						<div className='item-right'>
							<div>0.00456 ETH</div>
							<div style={{ opacity: 0.5 }}>~7.43 USD</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-left'>Est. Time</div>
						<div className='item-right'>
							<div>15 minutes</div>
						</div>
					</div>
				</div>

				<div style={{ margin: '12px 0' }}>
					<ButtonComponent
						onChange={() => alert('CLICKED')}
						text='Transfer now'
					/>
				</div>
				<div style={{ margin: '12px 0' }}>
					<div className='stages-container'>
						<div className='stage-item'>
							<span>01</span>
							<div>Bridge</div>
						</div>
						<hr className='dotted' />
						<div className='stage-item'>
							<span>02</span>
							<div>Claim</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stage1;
