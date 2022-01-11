import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/redux';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
