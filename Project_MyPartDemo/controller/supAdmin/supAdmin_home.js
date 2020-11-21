const express 	= require('express');
var feature 	= require('../../assets/json/packagefeature.json');
const adminModel = require('../../models/adminModel');
const supModel = require('../../models/supModel');
const verifyModel = require('../../models/verifyModel');
// const userModel = require.main.require('../../models/verifyModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	// if(req.cookies['uname'] != null){
	// 	res.render('supAdmin_home/index');
	// }else{
	// 	res.redirect('/login');
	// }
	res.render('supAdmin_home/index');
})


router.get('/subscriber', (req, res)=>{
	res.render('supAdmin_home/subscriber'); 
})

router.get('/supAdmin', (req, res)=>{
	// res.render('supAdmin_home/supAdmin'); 
	supModel.getAll(function(results){
		res.render('supAdmin_home/supAdmin', {userlist: results});
	});
})
router.get('/admin', (req, res)=>{
	
	adminModel.getAll(function(results){
		res.render('supAdmin_home/admin', {userlist: results});
	}); 
})

router.get('/feedbacks', (req, res)=>{
	res.render('supAdmin_home/feedbacks'); 
})
router.get('/verification', (req, res)=>{
	verifyModel.getAll(function(results){
		res.render('supAdmin_home/verification', {userlist: results});
	});
})
router.get('/package', (req, res)=>{
	res.render('supAdmin_home/package',
	{featurelist : feature}
	); 
})
router.get('/meeting', (req, res)=>{
	res.render('supAdmin_home/meeting'); 
})
router.get('/template', (req, res)=>{
	res.render('supAdmin_home/template'); 
})
router.get('/financial', (req, res)=>{
	res.render('supAdmin_home/financialstatus'); 
})

module.exports = router;