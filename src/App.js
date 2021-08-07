import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<switch>
					<Route path="/" exact component={Home} />
					<Route path="/Shop" exact component={Shop} />
				</switch>
			</div>
		</Router>
	);
}

export default App;
