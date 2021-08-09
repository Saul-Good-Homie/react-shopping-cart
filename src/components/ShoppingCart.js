import React from 'react';
import ShoppingSummary from './ShoppingSummary';

const ShoppingCart = ({ products }) => {
	return (
		<div className="product-container">
			{products.map((product) => (
				<ShoppingSummary key={product.id} product={product} />
			))}
		</div>
	);
};

export default ShoppingCart;
