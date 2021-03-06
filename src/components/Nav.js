import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ cartLength }) => {
	return (
		<nav>
			<h4>logo</h4>
			<ul className="nav-links">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link>
				<Link to="/cart">
					<li>
						{' '}
						Cart <span>{cartLength}</span>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
