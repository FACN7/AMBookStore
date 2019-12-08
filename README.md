# **AM BOOK STORE PROJECT**

## by: Ariel Elbahar and Moses Corcias

### About this project...

  Link - [](https://am-book-store.herokuapp.com/)

the am book store is an e-commerce web app for books. right now there is only us as admins so only we can actually sell stuff. 

a user can log in to our system and search for books and add what he wants to the cart and ofcourse in the end - pay for it via visa or paypal.
user can see all his purchase history and can update his details.

an admin user can do CRUD ops on the books in the store and see all the users orders and process them.

![](https://media.giphy.com/media/12imXZa2uBqf28/giphy.gif)



### Technologies


- [x]  React
- [x]  Express
- [x]  node.js
- [x]  MongoDB
- [x]  Bootstrap 4
- [x]  BrainTree - payment system API

![](https://media.giphy.com/media/CTX0ivSQbI78A/giphy.gif)

### Security 

* Authentication with JWT (Json web token)
* Encrypted passwords using "salt","uuid" and "crypto".
* Authorization - regular user/admin user.
* express Validator tool for validating fields in forms.

![](https://media.giphy.com/media/U04y6eLQGgWrK/giphy.gif)

### Setup

In order to install the system locally you will need to:

1. Clone the repo
```
git clone 'https://github.com/FACN7/AMBookStore.git'
```
2. install dependencies
```
cd BookStore
npm i
cd .. 
cd bookstore-front
npm i
```
3. run (both frontend and backend)
```
npm start
```

### our working process

1. backend - create mongoDB data base and collections and schemas.
2. express routes
3. controller methods
4. security and validations
5. front end development
6. implementing payment api
7. creating admin management operations

### What we've learned

- [x] mongoDB database
- [x] React routes and hooks
- [x] Braintree payment system
- [x] express 
- [x] deploy to heroku
- [x] connect the backend to the frontend using proxy

![](https://media.giphy.com/media/ZoAa7lsmym6UE/giphy.gif)


### what is left to do?

- [ ] Testing
- [ ] Email confirmations
- [ ] allow different sellers to sell their products 
- [ ] some more designing
- [ ] refactoring
