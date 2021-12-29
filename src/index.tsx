import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const AppProvider = () => {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}

render(<AppProvider />, document.getElementById('root'));
