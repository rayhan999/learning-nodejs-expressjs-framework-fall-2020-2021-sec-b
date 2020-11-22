const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const userModel = require('../../models/userModel');
const subscriberModel = require('../../models/subscriberModel');
const { runInNewContext } = require('vm');
const verificationModel = require('../../models/verificationModel');
// const userModel = require.main.require('././models/supModel');
const router = express.Router();
const app 			= express();
const urlencodedparser = bodyParser.urlencoded({ extended: false });

// router.get('/verify', (req, res) => {
// 	res.render('verification/verify');
// })


// // })

// router.post('/verify', (req, res)=> {
// 	var user = {
// 		type:req.body.type,
// 		cname : req.body.cname,
// 		cemail:req.body.cemail,
// 		cmobile:req.body.cmobile,
// 		cemployee:req.body.cemployee,
// 		caddress:req.body.caddress,
// 		cmname:req.body.cmname


// 	};

// 	verificationModel.insert(user, function (status) {
// 		if (status) {
//             userModel.insert(user, function (status) {
//                 if (status) {
//                     res.redirect('/supAdmin_home/admin');
//                 } else {
//                     res.render('admin/create');
//                 }
//             });
// 		} else {
// 			res.render('admin/create');
// 		}
//     });
   
// })

router.get('/edit/:id', (req, res) => {


	adminModel.getById(req.params.id, function (result) {

		var user = {
            name:result.Name,
            mobile:result.Mobile,
            email:result.Email,
            gender:result.Gender,
            address:result.Address
		};

		res.render('admin/edit', user);
	});
})


router.post('/edit/:id', (req, res) => {

	var user = {
		id: req.params.id,
       
		name: req.body.name,
	
		mobile:req.body.mobile,
		email:req.body.email,
		gender:req.body.gender,
        address:req.body.address
       
	};
	adminModel.update(user, function (status) {

		if (status) {
			res.redirect('/supAdmin_home/admin');
		} else {
			res.render('admin/edit', user);
		}
	});

	// res.redirect('/home/userlist');
})

router.get('/verify/:id', (req, res) => {
	verificationModel.getById(req.params.id, function (result) {

		var user = {
            type: result.Subscription_Type,
            cname :result.Company_Name,
            cemail:result.Company_Email,
            cmobile:result.Contact_No,
            
            caddress:result.Company_Address,
            cmname:	result.Manager_Name
        	};

		res.render('verification/verify', user);
	});

})

router.post('/verify/:id', (req, res) => {

	verificationModel.delete(req.params.id, function (status) {
		if (status) {
			// // res.redirect('/supAdmin_home/admin');
			// userModel.delete(req.params.id, function (status) {
            //     if (status) {
			// 		res.redirect('/supAdmin_home/admin');
            //     } else {
            //         res.render('admin/delete');
            //     }
            // });

            var user = {
                		type:req.body.type,
                		cname : req.body.cname,
                		cemail:req.body.cemail,
                		cmobile:req.body.cmobile,
                		
                		caddress:req.body.caddress,
                		cmname:req.body.cmname
                
                
                	};
                
                	
                    subscriberModel.insert(user, function (status) {
                                if (status) {
                                    res.redirect('/supAdmin_home/verification');
                                } else {
                                    res.render('verification/verify');
                                }
                            });
                		
                   
		}else {
			res.render('verification/verify');
		}
	});

})



module.exports = router;


