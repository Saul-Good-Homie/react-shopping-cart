import { React } from 'react';
import ShoppingSummary from './ShoppingSummary';
import Total from './Total';

const ShoppingCart = ({ cart, removeFromCart, total }) => {
	return (
		<div className="cart-container">
			{cart.map((product) => (
				<ShoppingSummary
					key={product.id}
					product={product}
					removeFromCart={removeFromCart}
				/>
			))}
			<Total total={total} />
		</div>
	);
};

export default ShoppingCart;
