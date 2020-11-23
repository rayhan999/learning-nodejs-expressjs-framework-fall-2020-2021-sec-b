//declaration
const express 		= require('express');
const explayouts	= require('express-ejs-layouts');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const { check, validationResult } = require('express-validator');
const expfileupload	=require('express-fileupload');
const login			= require('./controller/login');
const supAdmin_home			= require('./controller/supAdmin/supAdmin_home');
const admin_home			= require('./controller/admin/admin_home');
const logout		= require('./controller/logout');
const adminuser			= require('./controller/adminUser');
const supAdmin		= require('./controller/supAdmin/supAdmin');
const admin		= require('./controller/supAdmin/admin');
const subscriber		= require('./controller/supAdmin/subscriber');
const feedback		= require('./controller/supAdmin/feedback');
const feedbackadmin		= require('./controller/admin/feedback');
const verification		= require('./controller/supAdmin/verification');
const meeting		= require('./controller/supAdmin/meeting');
const registration	= require('./controller/registration');
const app 			= express();

app.use(explayouts);
//config
// app.set('layouts')
app.set('view engine', 'ejs');



//middleware

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(expressValidator());
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use(expfileupload());


app.use('/login', login);
app.use('/supAdmin_home', supAdmin_home);
app.use('/admin_home', admin_home);
app.use('/logout', logout);
app.use('/adminUser', adminuser);
app.use('/supAdmin_home/supAdmin', supAdmin);
app.use('/supAdmin_home/admin', admin);
app.use('/supAdmin_home/subscriber', subscriber);
app.use('/supAdmin_home/verification', verification);
app.use('/supAdmin_home/feedback', feedback);
app.use('/admin_home/feedback', feedbackadmin);
app.use('/supAdmin_home/meeting', meeting);
app.use('/getstarted',registration);

//route
app.get('/', (req, res)=>{
	//res.send('Hello from express server');	
	res.render('login/landing');
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});