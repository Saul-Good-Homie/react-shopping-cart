import { React } from 'react';
import ShoppingSummary from './ShoppingSummary';
import Total from './Total';

const ShoppingCart = ({ cart, total }) => {
	return (
		<div className="cart-container">
			{cart.map((product) => (
				<ShoppingSummary key={product.id} product={product} />
			))}
			<Total total={total} />
		</div>
	);
};

export default ShoppingCart;
