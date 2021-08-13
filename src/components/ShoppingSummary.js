import React from 'react';
import WaterGlass from '../Assets/water-glass.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingSummary = ({ product, removeFromCart }) => {
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
			<FontAwesomeIcon
				className="icons"
				icon={faTrash}
				onClick={() => {
					removeFromCart(product);
				}}
			/>
		</div>
	);
};

export default ShoppingSummary;
