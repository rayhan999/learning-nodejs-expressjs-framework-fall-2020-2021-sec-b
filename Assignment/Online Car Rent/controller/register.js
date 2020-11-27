const express 	= require('express');
const { Result } = require('express-validator');
const { check, validationResult } = require('express-validator');
const adminModel = require('../models/adminModel');
const memberModel = require('../models/memberModel');
 const userModel	= require.main.require('./models/userModel');
// const adminUserModel	= require.main.require('./models/adminUserModel');

const router 	= express.Router();







router.get('/', (req, res) => {
	res.render('login/register')
})

router.post('/', [
	
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
			memberModel.insert(user,function(status){
				if(status){
					//console.log("adminusermodel");
					res.redirect('/login');
				}else{
					res.redirect('/registration');
				}
			})
			
		} else {
			res.redirect('/registration');
		}
	});
}
})


module.exports = router;