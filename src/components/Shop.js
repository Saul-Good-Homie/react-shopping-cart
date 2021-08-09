import { React } from 'react';
import ProductCard from './ProductCard';

const Shop = ({ products, addToCart }) => {
	return (
		<div className="product-container">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} addToCart={addToCart} />
			))}
		</div>
	);
};

export default Shop;
