import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { useEffect } from 'react';

const Login = () => {
	const magic = new Magic('pk_live_B81F9B12CD77158E', {
		network: 'mainnet',
		extensions: [new OAuthExtension()],
	});

	async function startConnection() {
		const accounts = await magic.wallet.connectWithUI();
		
		/*
		await magic.oauth.loginWithRedirect({
			provider: 'google' ,
			redirectURI: 'https://your-app.com/your/oauth/callback',
			scope: ['user:email'] ,
		});
        */
	}

	useEffect(() => {
		startConnection();
	});

	return (
		<>
			<h1 style={{ color: 'black' }}>LOGIN</h1>
		</>
	);
};

export default Login;
