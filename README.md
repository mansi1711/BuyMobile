In index.js - main three components are added 
1) Navbar - fixed
2) Routes - changes according to flow
3) Footer - fixed

React redux : Created a store to keep track of cart items, to increase or decrease cart items.

Context Api : Ceated a login provider to maintain login session.

Navbar Component : This component is used to set a fixed menu for the website. It is used to send authentication and search events to home and also view the cart and maintain login-logout view change.

Footer Component : This is the footer that is fixed for the website.

Home Component : It is used to display the data, Pagination, searching, sorting are done in this component. Adding item to cart and view details are triggered from this copmponent.

Cart Component : This component is used to display items added in cart. It triggers remove from cart - decrease quantity and details functionality. User can place order from this component - If the user is not loggedin - he will be redirected to the login component. If the user is loggedin - order will be placed and order ID will be displayed. If no items present - he will be requested to add items.

CarouselView Component : This component is used to display the details of the component. User can add the item from cart from this component also.

ValidatedLoginForm Component : Login validations and Login is done in this component.

history Component : This component is used to provide history to all the components to navigate to a page.

Routes Components : This component checks the routes and navigate the user accordingly.

LoginProvider : This is a provider which provides the state to m aintain login session.

db.json : This file contains the mobile data accessible by json-server to create database and perform operations.


Note : In search functionality - after searching anything you need to refresh the page to see results and if you want to see the original page again then click on cross button - clear search and again refresh.

Login Credentials:
email - abc@gmail.com
Password - Abc12345