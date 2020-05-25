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
import { addItemToCart } from "../actions";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

 class Home extends Component {

    constructor(props) {
        super(props);
        this.page= 1;
        this.sort='asc';
        this.searchText='';
    }

    state = {
        products: []
    }

    searchFunc(text){
        fetch('http://localhost:3000/products?_page=1&_limit=8&q='+text)
                    .then(res=>res.json())
                    .then(data=>{ this.setState({
                        products: data
                      });
                    });
    }

    componentDidMount() {
            if(this.props.location.state !== undefined){
                    this.searchText =  this.props.location.state.searchText
                    fetch('http://localhost:3000/products?_page=1&_limit=8&q='+this.searchText)
                    .then(res=>res.json())
                    .then(data=>{ 
                    if(data.length > 0){
                        this.setState({
                            products: data
                        });
                    }
                    });
                    console.log("sear"+this.searchText)                 
            }
            else{
                    fetch('http://localhost:3000/products?_page=1&_limit=8')
                    .then(res=>res.json())
                    .then(data=>{ this.setState({
                        products: data
                      });
                    });
                }
    }   

    paginateandSort(val, sortVal){ 
        fetch('http://localhost:3000/products?_page='+val+'&_limit=8&_sort=model&_order='+sortVal)
        .then(res=>res.json())
        .then(data=>{ this.setState({
            products: data
          });
        });

        this.sort = sortVal;
            this.page = val;
    }

    addToCart(product) {
        this.props.addItemToCart(product)
        window.alert("Item added to Cart")

    }

    render() {
        return (
            <div className='Home'>  
            {(() => {
                    if(this.page === 1){
                        return <button className="btn btn-primary" type="button" style={{float: 'right', marginBottom: '20px', marginRight:'20px', width: '100px'}} onClick={() => this.paginateandSort(2,this.sort)}>Next</button>
                    }
                    else{
                        return <button className="btn btn-primary" type="button" style={{float: 'left', marginBottom: '20px', marginLeft:'20px', width: '100px'}} onClick={() => this.paginateandSort(1,this.sort)}>Prev</button>
                    }
                })()}   
                    <div className="span6" style={{textAlign: 'center' }}>
                    <Dropdown>
                        <DropdownButton id="dropdown-item-button" title={<div className="pull-left">
                        <i className="fa fa-chevron-down"></i>
                                Sort
                            </div>}>
                        <Dropdown.Item as="button" onClick={() => this.paginateandSort(1,'asc')}>Ascending</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => this.paginateandSort(1,'desc')}>Descending</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                    </div>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        { this.state.products.map(product => {
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
                                            </CardContent>
                                        </CardActionArea>
                                         <CardActions>
                                             <a onClick={() => this.addToCart(product)} >Add to cart</a>
                                             <Link to={{pathname:'/details' ,product:product}}>Details</Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                          })
                        }
                    </Grid>
                    {(() => {
                    if(this.page === 1){
                        return <button className="btn btn-primary" type="button" style={{float: 'right', marginTop: '20px', marginRight:'20px', width: '100px'}} onClick={() => this.paginateandSort(2,this.sort)}>Next</button>
                    }
                    else{
                        return <button className="btn btn-primary" type="button" style={{float: 'left', marginTop: '20px', marginLeft:'20px', width: '100px'}} onClick={() => this.paginateandSort(1,this.sort)}>Prev</button>
                    }
                })()}
                    
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      cartItems: state.cartItems
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addItemToCart }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);