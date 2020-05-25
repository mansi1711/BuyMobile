import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/CarouselView.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItemToCart } from "../actions";
  
function CarouselView(props) {

	function addToCart(product) {
        props.addItemToCart(product)
        window.alert("Item added to Cart")

    }

	let { product } = props.location;

  return (
	<div className="carouselView">
		<span className="left">
	<Carousel>
		{product.imageURLs.map(imageURL => {
			return(
			<div key={product.id}>
				<img src={imageURL} alt={product.name} />
			</div>
		)
		}) }
		</Carousel>
	</span>
	<span class="vertical-line"></span>
	<span className="right" >
	<h1>{product.model}</h1>
	<h2>Samsung Galaxy S20+ Plus 5G Factory Unlocked New Android Cell Phone US Version | 128GB of Storage | Fingerprint ID and Facial Recognition | Long-Lasting Battery | US Warranty |Cloud Blue</h2>
	<p><b>Price:</b> Rs.{product.price}</p>
	<ul>
		<li>Power of 5G: Get next-level power for everything you love to do with Samsung Galaxy 5G; Share more, game harder, experience more and never miss a beat</li>
		<li>Single Take AI: Capture video and multiple types of images with one tap of the shutter button; Lenses, effects and filters capture the best of every moment, every time</li>
		<li>Hi-Res Camera Zoom: Capture hi-res images as if you’re 3 feet away, from 100 feet away; Whether you want to zoom in close from afar or magnify details nearby, the new 30x Space Zoom gives you impressive power and clarity</li>
		<li>Bright Night Mode: Capture crisp images and vibrant video in Bright Night mode and create high-quality content in low light – no flash needed</li>
		<li>Super Fast Charging: Charge up quicker with Super Fast Charge so you can keep moving with more juice; Give your buds – or Galaxy buds – a boost of power with Wireless PowerShare right from Galaxy S20+ Plus 5G</li>
	</ul>
	<button className="btn btn-primary" type="button" style={{float: 'left', marginBottom: '20px', marginLeft:'20px', width: '150px'}} onClick={() => addToCart(product)}>Add Item to Cart</button>
	</span>
	</div>
  );
}

function mapStateToProps(state) {
    return {
      cartItems: state.cartItems
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addItemToCart }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CarouselView);
