//declaration
const express 		= require('express');
const explayouts          = require('express-ejs-layouts');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const nodemailer 				= require("nodemailer");
const {check,validationResult}	=require('express-validator');
const fastcsv 					= require("fast-csv");
const fs 						= require("fs");
const expfileupload			= require('express-fileupload');
const pdf 					= require('html-pdf');
// const pdfDocument     		= require('pdfkit');
// const user					= require('./controller/user');
const register					= require('./controller/register');
const login					= require('./controller/login');
 const home					= require('./controller/home');
 const cars					= require('./controller/cars');
 const member					= require('./controller/member');
 const admin					= require('./controller/admin');
 const blogs					= require('./controller/blogs');
 const logout				= require('./controller/logout');
 const reservation				= require('./controller/reservation');

const app 					= express();

app.use(explayouts);
//config
app.set('view engine', 'ejs');
//middleware
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use(expfileupload());


// app.use('/user', user);
app.use('/registration', register);
 app.use('/login', login);
 app.use('/logout', logout);

 app.use('/home', home);
 app.use('/home/cars',cars)
 app.use('/home/member',member)
 app.use('/home/admin',admin)
 app.use('/home/blogs',blogs)
 app.use('/home/reservation',reservation)


//route
app.get('/', (req, res)=>{
//	res.render('login/landing');	
res.send("All good");
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});