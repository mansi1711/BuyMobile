import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeItemFromCart } from "../actions";
import history from './history';
import UserProfile from './UserProfile';

 class Cart extends Component {

    placeOrder(){
        if(UserProfile.isLoggedIn()){
            console.log(localStorage.getItem('isLoggedIn'))
            console.log(UserProfile.isLoggedIn())
            window.alert("Order placed Successfully: Order ID is - 0278ANQ")
            this.props.cartItems.map(product => {
                return this.props.removeItemFromCart(product);
            })
        }
        else{
            window.alert("Login to place Order");
            history.push('/login')
        }
    }
    
    render() {
        if(this.props.cartItems && this.props.cartItems.length > 0){
            return (
                <div className='Home'>  
                <button className="btn btn-primary" type="button" style={{float: 'right', marginBottom: '20px', marginRight:'20px', width: '150px'}} onClick={() => this.placeOrder()}>Place Order</button>             
                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            { this.props.cartItems.map(product => {
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                                        <Card className='root'>
                                            <CardActionArea>
                                                <CardMedia className="media"
                                                    component="img"
                                                    alt={product.model}
                                                    height="375"
                                                    image={product.imageURL}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {product.model}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Price : {product.price} Rs.
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Quantity : {product.quantity}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <a onClick={() => this.props.removeItemFromCart(product)} >Remove Item from cart</a>
                                                <Link to={{pathname:'/details' ,product:product}}>Details</Link>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                            }
                        </Grid>


                </div>
            )
        }
        else {
            return(
                <div className='Home'>
                    <div className="span6" style={{textAlign: 'center' }}>
                        <p>No item added in cart. Please add some items and come again.</p>
                        <button className="btn btn-primary" type="button" onClick={() => history.push("/")}>Continue Shopping</button>
                        {window.alert("No Item in Cart")}
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
      cartItems: state.cartItems
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeItemFromCart }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);