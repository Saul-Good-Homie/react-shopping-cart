import { React, useState } from 'react';
import WaterGlass from '../Assets/water-glass.jpeg';

const ProductCard = ({ product, addToCart }) => {
	const [quantity, setQuantity] = useState(0);

	const updateCart = () => {
		console.log(quantity);
		product.quantity = quantity;
		addToCart(product);
	};

	return (
		<div className="card">
			<div className="card-left">
				<img src={WaterGlass} alt="glass of water with lemon wedge"></img>
			</div>
			<div className="card-right">
				<div className="name">{product.name}</div>
				<div className="description">{product.description}</div>
				<br></br>
				<div className="price">${product.price}</div>
				<br></br>
				<form>
					<label>Quantity</label>
					<select
						name="quantity"
						id="quantity"
						onChange={(e) => setQuantity(parseInt(e.target.value))}
					>
						<option disabled selected value>
							--
						</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
					<input
						type="button"
						onClick={() => {
							updateCart();
						}}
						value="Add to Cart"
					></input>
				</form>
				<div className="in-cart">Cart: {product.quantity}</div>
			</div>
		</div>
	);
};

export default ProductCard;
