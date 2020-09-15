const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const app=express();
const port=process.env.PORT || 3000 ;

app.use(bodyparser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());


const signup_route = require('./api/routes/signup');
const logout_route=require('./api/routes/logout');
const login_route=require('./api/routes/login');
const forgot_password_route = require('./api/routes/forgot_password');



mongoose
  .connect("mongodb://localhost:27017/axisDB",{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})
  .then(
    () => {
      console.log("connected to mongodb");
    },
    (err) => console.log("Error connecting to mongodb",err)
  );



app.use('/signup',signup_route);
app.use('/logout',logout_route);
app.use('/login',login_route);
app.use('/forgot_password',forgot_password_route);
app.use('/reset',forgot_password_route);




//------Error Handling------

app.use((req,res,next)=>{

    const error=new Error('Not Found...');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500 );
    res.json({
        error:{
            msg: error.message
        }
    })
});



app.listen(port, function() {
  console.log("Server started on port "+ port);
});
