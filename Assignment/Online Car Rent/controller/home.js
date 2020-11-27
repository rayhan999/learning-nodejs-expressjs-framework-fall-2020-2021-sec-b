const express 	= require('express');

const userModel = require.main.require('./models/userModel');
const carModel = require.main.require('./models/carModel');
const rentalModel = require.main.require('./models/rentalModel');
const blogModel = require.main.require('./models/blogModel');
const adminModel = require.main.require('./models/adminMOdel');
const memberModel = require.main.require('./models/memberModel');
//const reservationModel = require.main.require('./models/reservationModel');
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
router.get('/admin', (req, res)=>{
	
	adminModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/admin',{ userlist:results , uname,type}); 
	});
})
router.get('/member', (req, res)=>{
	
	memberModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/member',{ userlist:results , uname,type}); 
	});
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

router.get('/adminprofile/:uname', (req, res)=>{
	var uname = req.cookies['uname'];
		var type = req.cookies['type'];
	adminModel.getByUname(req.params.uname,function(result){
		var profile = {
			username:result.username,
			name:result.name,
			email:result.email,
			mobile:result.mobile,
			address:result.address,
			image:result.image
		};
			res.render('home/profile', {profile,uname,type});
	});
});
router.get('/adminprofile', (req, res)=>{
	var uname = req.cookies['uname'];
		var type = req.cookies['type'];
	adminModel.getprofile(uname,function(results){
		
		res.render('home/profile',{ userlist:results , uname,type}); 
	});
})
router.get('/memberprofile', (req, res)=>{
	
	adminModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/profile',{ userlist:results , uname,type}); 
	});
})

router.get('/reservation', (req, res)=>{
	
	//reservationModel.getAll(function(results){
		var uname = req.cookies['uname'];
		var type = req.cookies['type'];
		res.render('home/reservation',{  uname,type}); 
	//});
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