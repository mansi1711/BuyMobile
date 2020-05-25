import MyContext from './MyContext';
import React, { Component } from 'react';

class LoginProvider extends Component {

    state = {
        isLoggedIn: false
      };

    updateLoggedIn = (value) => {
        console.log('value'+value)
        this.setState({
            isLoggedIn: value
        });
    }
  
    render() {
        return (
            <MyContext.Provider
            value={{
                isLoggedIn: this.state.isLoggedIn,
                updateLoggedIn: this.updateLoggedIn
            }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

  export default (LoginProvider);