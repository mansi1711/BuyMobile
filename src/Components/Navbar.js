import React, {useState, useEffect, useContext} from 'react';
import '../styles/Navbar.css';
import Cart from '../assets/cart.png';
import history from './history';
import { withRouter } from 'react-router-dom';
import UserProfile from './UserProfile';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import MyContext from './MyContext';

  function Navbar(){
    const contextValue = useContext(MyContext);
    const [search, setSearch] = useState(''); 

    useEffect(() => {
      console.log('context' + contextValue.isLoggedIn)
    });

    function logout(){
      UserProfile.logout();
      contextValue.updateLoggedIn(false);
    }

    function searchfunc (searchVal){
      history.push({pathname:'/',state:{
        searchText: searchVal
      }})
    }

    return(
      <div className="Navbar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         <div className="navbar">
            <p style={{float:'left'}}>BuyMobile</p>
            <img src={Cart} alt="Cart" onClick={() => history.push("/cart")} />
            {(() => {
              if(contextValue.isLoggedIn){
                return (
                  <Dropdown>
                  <DropdownButton id="dropdown-item-button" title={<div className="pull-left">
                  <i className="fa fa-chevron-down"></i>
                        {UserProfile.getName()}
                    </div>}>
                  <Dropdown.Item as="button" onClick={() => logout()}>Logout</Dropdown.Item>
                </DropdownButton>
                </Dropdown>
                )
              }
              else{
                return <button className="btn btn-primary" type="button" onClick={() => history.push("/login")}>Login</button>
              }
            })()}
            <div className="search-container">
            <button type="submit" onClick={() => searchfunc("")}><i className='fa fa-close'></i></button>
                 <button type="submit" onClick={() => searchfunc(search)}><i className='fa fa-search'></i></button>
                 <input type="text" placeholder="Search.." name="search" onChange={(e) => setSearch(e.target.value)}
               />
            </div>
          </div>      
      </div>
    );
  }

export default withRouter(Navbar);
