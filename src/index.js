// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';
// import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
// 	reducers,
// 	composeEnhancers(applyMiddleware(thunk)));
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './Apps';
ReactDOM.render(
	<Apps/>,
	document.getElementById('test')
)
