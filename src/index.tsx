import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './classes.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/redux';

const AppProvider = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	)
}

render(<AppProvider />, document.getElementById('root'));
