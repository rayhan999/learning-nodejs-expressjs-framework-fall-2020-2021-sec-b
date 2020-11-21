const express 	= require('express');
var feature 	= require('../assets/json/packagefeature.json');
const regModel = require('../models/regModel');
// const userModel	= require.main.require('./models/supModelregModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/getstarted',
	{featurelist : feature})
})

router.post('/', (req, res)=>{

	var user = {
		type:req.body.type,
		cname : req.body.cname,
		cemail:req.body.cemail,
		cmobile:req.body.cmobile,
		cemployee:req.body.cemployee,
		caddress:req.body.caddress,
		cmname:req.body.cmname
	};

	regModel.insert(user, function (status) {
		
		if (status) {
			
			res.redirect('/');
		} else {
			
			res.render('login/getstarted');
		}
	});

})

// router.get('/getstarted', (req, res)=>{
// 	res.render('login/getstarted')
// })

module.exports = router;