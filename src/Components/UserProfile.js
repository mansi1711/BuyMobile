var UserProfile = (function() {
  
    var getEmail = function() {
      return localStorage.getItem('Email');
    };
  
    var setEmail = function(email) {
      localStorage.setItem('Email', email);    
      localStorage.setItem('isLoggedIn', true); 
    };

    var isLoggedIn = function() {
        if(localStorage.getItem('isLoggedIn') !== null){
            return true;
        }
        return false;
    }

    var logout = function(){
        localStorage.clear();
        console.log('Logging Out');
        console.log(localStorage.getItem('isLoggedIn'));
    }

    var getName = function(){
        return 'User';
    }
  
    return {
      getEmail: getEmail,
      setEmail: setEmail,
      isLoggedIn: isLoggedIn,
      logout: logout,
      getName: getName
    }
  
  })();
  
  export default UserProfile;