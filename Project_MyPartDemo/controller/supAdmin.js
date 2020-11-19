const express = require('express');
const supModel = require('../models/supModel');
const userModel	= require.main.require('./models/supModel');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('supAdmin/create'); 
})

router.post('/create', (req, res)=>{

	var user = {
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})


router.get('/edit/:id', (req, res)=>{

	
	userModel.getById(req.params.id,function(result){

		var user ={
			username: 	result.username,
			password: 	result.password,
			type	: 	result.type
		};

		res.render('user/edit', user);
	});
})


router.post('/edit/:id', (req, res)=>{

	var user = {
		id		:	req.params.id,
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};
	userModel.update(user,function(status){
		
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.render('user/edit',user);
		}
	});
	
	// res.redirect('/home/userlist');
})

router.get('/delete/:id', (req, res)=>{
	userModel.getById(req.params.id,function(result){

		var user ={
			username: 	result.username,
			password: 	result.password,
			type	: 	result.type
		};

		res.render('user/delete', user);
	});

})

router.post('/delete/:id', (req, res)=>{
	
	userModel.delete(req.params.id,function(status){
		if(status){
			res.redirect('/home/userlist');
		}
	});
	
})

router.post('/uname',(req,res)=>{
	var user = {
		search : req.body.search
    };
  
	supModel.search(user, function(results){
		if(results){
         
			res.json({flag:true});
		}else{
			res.json({flag:false});
		}
	});
});

module.exports = router;


//validation -> express-validator (https://www.npmjs.com/package/express-validator)
//file upload -> express-fileupload (https://www.npmjs.com/package/express-fileupload)
