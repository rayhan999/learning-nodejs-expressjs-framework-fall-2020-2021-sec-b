//declaration
const express 		= require('express');
const explayouts	= require('express-ejs-layouts');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const login			= require('./controller/login');
const home			= require('./controller/home');
const logout		= require('./controller/logout');
const user			= require('./controller/user');
const supAdmin		= require('./controller/supAdmin');
const app 			= express();

app.use(explayouts);
//config
// app.set('layouts')
app.set('view engine', 'ejs');

//middleware

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());

app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);
app.use('/supAdmin', supAdmin);

//route
app.get('/', (req, res)=>{
	res.send('Hello from express server');	
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});