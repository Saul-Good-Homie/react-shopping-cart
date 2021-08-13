import React from 'react';

const Total = ({ total }) => {
	return (
		<div className="card">
			<div className="name">Total: ${total.toFixed(2)}</div>
			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Total;
