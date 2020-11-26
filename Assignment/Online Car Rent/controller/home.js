const express 	= require('express');

const userModel = require.main.require('./models/userModel');
const carModel = require.main.require('./models/carModel');
const rentalModel = require.main.require('./models/rentalModel');
const blogModel = require.main.require('./models/blogModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	/* if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
	} */

	console.log(req.cookies['uname']);
	console.log(req.cookies['type']);
	var uname = req.cookies['uname'];
	var type = req.cookies['type'];
	//console.log(uname);
	res.render('home/index',{uname,type});
})

router.get('/cars', (req, res)=>{
	
	carModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/cars',{ userlist:results , uname,type}); 
	});
})

router.get('/rentalhistory', (req, res)=>{
	
	rentalModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/rentalhistory',{ userlist:results , uname,type}); 
	});
})
router.get('/blogs', (req, res)=>{
	
	blogModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/blogs',{ userlist:results , uname,type}); 
	});
})

router.get('/invoice', (req, res)=>{
	res.render('home/invoice'); 
})

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
});


module.exports = router;