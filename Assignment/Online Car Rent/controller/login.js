const express 	= require('express');
const { Result } = require('express-validator');
const { check, validationResult } = require('express-validator');
 const userModel	= require.main.require('./models/userModel');
// const adminUserModel	= require.main.require('./models/adminUserModel');

const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(result){
		if(result){
			
			//req.session.uname = req.body.username;
			/* res.cookie('uname', req.body.username);
			res.redirect('/home'); */	
			res.cookie('uname', req.body.username);
			var user = {
				username: result.username,
				password: result.password,
				type: result.type
			};
			res.cookie('type',result.type);
		
			console.log(user);
			if(user.type == "Admin"){
				res.redirect('/home');
			}
			else if(user.type == "Member"){
				res.redirect('/home');
			}
			else{
				var  message = "Wrong Username or password";
				//console.log(message);
				res.render('login/index',{message : message});
				
			}

		}else{
			var  message = "Wrong Username or password";
				//console.log(message);
			res.render('login/adminlogin',{message : message});
		}
	});

})





router.get('/register', (req, res) => {
	res.render('login/register')
})

router.post('/register', [
	check('cmname', 'Name must be at least 4 character').exists().isLength({min:4}),
	check('username', 'Username name must be at least 3 character').exists().isLength({min:3}),
	check('password', 'mobile must be at least 4 character').exists().isLength({min:4})
],(req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors.array());
		const alerts = errors.array();
		
		res.render('login/register',{alerts})
	} else {
	var user = {
		username: req.body.username,
		password: req.body.password,
		type:req.body.type
	};

	userModel.insert(user, function (status) {
		if (status) {
			//console.log("usermodel");
			adminUserModel.insert(user,function(status){
				if(status){
					//console.log("adminusermodel");
					res.redirect('/login');
				}else{
					res.redirect('/login/register');
				}
			})
			
		} else {
			res.redirect('/login/register');
		}
	});
}
})


module.exports = router;