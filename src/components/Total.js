import React from 'react';

const Total = ({ total }) => {
	return (
		<div className="card">
			<div className="name">Total: ${total}</div>
			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Total;
