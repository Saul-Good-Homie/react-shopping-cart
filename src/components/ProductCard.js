import React from 'react';
import WaterGlass from '../Assets/water-glass.jpeg';

const ProductCard = () => {
	return (
		<div className="card">
			<div className="card-left">
				<img src={WaterGlass} alt="glass of water with lemon wedge"></img>
			</div>
			<div className="card-right">
				<div className="name">Name</div>
				<div className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<br></br>
				<div className="price"> $4.99 </div>
				<br></br>
				<form>
					<lable>Quantity</lable>
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
					<input type="submit" value="Add to Cart"></input>
				</form>
			</div>
		</div>
	);
};

export default ProductCard;
