const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
})

router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {userlist: results});
	});

});
router.get('/Subscriber', (req, res)=>{
	res.render('home/Subscriber'); 
})

router.get('/supAdmin', (req, res)=>{
	res.render('home/supAdmin'); 
})
router.get('/admin', (req, res)=>{
	res.render('home/admin'); 
})
router.get('/ab', (req, res)=>{
	res.render('home/ab'); 
})

module.exports = router;