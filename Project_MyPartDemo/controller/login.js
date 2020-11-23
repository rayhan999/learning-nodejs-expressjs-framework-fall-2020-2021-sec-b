const express = require('express');

const { check, validationResult } = require('express-validator');
const userModel = require.main.require('./models/userModel');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('login/index')
})

router.post('/', (req, res) => {

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function (result) {
		if (result) {

			// req.session.uname = req.body.username; 	
			// console.log(req.session.uname);

			res.cookie('uname', req.body.username);
			var user = {
				username: result.username,
				password: result.password,
				type: result.type
			};
			//var type = result.type;
			//console.log(user.type);
			if (user.type == "superadmin") {
				res.redirect('/supAdmin_home');
			}
			else if (user.type == "admin") {
				res.redirect('/admin_home');
			}
			//res.redirect('/home');	
		} else {
			res.redirect('/login');
		}
	});

})


router.get('/register', (req, res) => {
	res.render('login/register')
})

router.post('/register', [
	check('cmname', 'Name must be at least 4 character').exists().isLength({min:4}),
	check('username', 'Username name must be at least 3 character').exists().isLength({min:3}).isAlpha(),
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
			//req.session.uname = req.body.username;
			//	res.cookie('uname', req.body.username);
			res.redirect('/login');
		} else {
			res.redirect('/login/register');
		}
	});
}
})


// router.get('/getstarted', (req, res)=>{
// 	res.render('login/getstarted')
// })

module.exports = router;