import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [products] = useState([
		{
			id: '1',
			name: 'name',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			price: 4.99,
			quantity: 0,
		},
		{
			id: '2',
			name: 'name',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			price: 49.99,
			quantity: 0,
		},
		{
			id: '3',
			name: 'name',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			price: 99.99,
			quantity: 0,
		},
	]);

	const [cart, setCart] = useState([]);
	const [cartLength, setCartLength] = useState(0);
	const [total, setTotal] = useState(0);

	const addToCart = (product) => {
		if (product.quantity > 0 && !cart.includes(product)) {
			setCart([...cart, product]);
			console.log('added to cart');
		} else if (product.quantity === 0) {
			const refreshedCart = cart.filter((x) => x.quantity !== 0);
			setCart(refreshedCart);
		} else {
			console.log('cart already updated');
		}
		let sum = 0;
		let runningTotal = 0;
		products.map((x) => {
			sum = sum + x.quantity;
			setCartLength(sum);
			runningTotal = runningTotal + x.price * x.quantity;
			setTotal(runningTotal);
		});
	};

	const removeFromCart = (product) => {
		console.log(product);
		console.log(product.quantity);
		product.quantity = 0;
		addToCart(product);
	};

	return (
		<Router>
			<div className="App">
				<Nav cartLength={cartLength} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path="/Shop"
						exact
						component={() => <Shop products={products} addToCart={addToCart} />}
					/>
					<Route
						path="/cart"
						exact
						component={() => (
							<ShoppingCart
								cart={cart}
								removeFromCart={removeFromCart}
								total={total}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
