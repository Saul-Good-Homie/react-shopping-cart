import React from 'react';
import WaterGlass from '../Assets/water-glass.jpeg';

const ShoppingSummary = ({ product }) => {
	const subTotal = product.price * product.quantity;

	return (
		<div className="summary-card">
			<div className="summary-card-left">
				<img
					className="cart-img"
					src={WaterGlass}
					alt="glass of water with lemon wedge"
				></img>
			</div>
			<div className="summary-card-center">
				<div className="name">{product.name}</div>

				<div className="price">${product.price}</div>
			</div>
			<div className="summary-card-right">
				<div className="quantity">Quantity: {product.quantity}</div>
				<div>Subtotal: ${subTotal.toFixed(2)}</div>
			</div>

			{/* <form>
					<label>Quantity: </label>
					
					<select name="quantity" id="quantity">
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
					<input type="button" value="Update Cart"></input>
				</form> */}
		</div>
	);
};

export default ShoppingSummary;
