import PolidoStakeBanner from '@lidofinance/polygon-sdk-banner';
import './styles.css';

const Stage2 = () => {
	return (
		<div className='content-container'>
			<div className='message'>
				<div>Coming soon...</div>
				<span>
					{`We will integrate new protocols into our platform. We will be the best
					DeFi platform suitable for DREX (Tokenized Real)`}
				</span>
			</div>
			<hr className='solid-line bd-white' />
			<div className='banner-container'>
				<PolidoStakeBanner direction='horizontal' />
			</div>
		</div>
	);
};

export default Stage2;
