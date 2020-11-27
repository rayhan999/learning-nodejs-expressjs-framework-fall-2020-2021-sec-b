const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const carModel = require('../models/carModel');
const { compile } = require('ejs');
const adminModel = require('../models/adminModel');
const userModel = require('../models/userModel');

const router = express.Router();
const app = express();


router.get('/create', (req, res) => {
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];
    // console.log(uname);
    // console.log(type);
    res.render('admin/create', { uname, type });
})


// })

router.post('/create', [
    check('name', 'Name cannot be empty').not().isEmpty(),
    check('mobile', 'Rent Price cannot be empty').not().isEmpty().isNumeric(),
    check('address', 'Car type cannot be empty').not().isEmpty(),
    check('email', 'Email is not valid').isEmail().normalizeEmail()



    // //check('username', 'Username name must be at least 3 character').exists().isLength({min:3}),
    // check('mobile', 'mobile must be at least 4 character').exists().isLength({min:4}),
    // check('gender', 'gender must be at least 4 character').exists().isLength({min:4}),
    // check('address', 'address must be at least 5 character').exists().isLength({min:5}),
    // check('email', 'Email is not valid').isEmail().normalizeEmail()

], (req, res) => {
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        const alerts = errors.array();

        res.render('admin/create', { alerts, uname, type });
    } else {
        //console.log("Else e aschi");
        var user = {
            type:req.body.type,
            password:req.body.password,
            username:req.body.username,
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            address:req.body.address
           
         };
        if (req.files.image) {
             console.log("file paise");
            var file = req.files.image;
            var filename = file.name;
            console.log(filename);
            var image = "/assets/uploads/" + filename;
            file.mv('./assets/uploads/' + filename, function (err) {
                if (err) {
                    res.render('admin/create', { uname, type });
                }
                else {
                    var user = {
                       type:req.body.type,
                       password:req.body.password,
                       username:req.body.username,
                       name:req.body.name,
                       mobile:req.body.mobile,
                       email:req.body.email,
                       address:req.body.address,
                        image: image
                    };
                    console.log(user);
                    adminModel.insert(user, function (status) {
                        if (status) {
                            userModel.insert(user,function(status){
                                res.redirect("/home/admin");
                            });
                            
                        }
                    });
                }
            });
        }
        else {

        }




    }
})

router.get('/view/:id', (req, res) => {
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];

    carModel.getById(req.params.id, function (result) {

        var car = {
            model: result.name,
            rentprice: result.rentprice,
            description: result.description,
            type: result.type,
            customRadio: result.isFeatured,
            image: result.image
        };
        console.log(car);
        res.render('cars/view', { car, uname, type });
    });
})

router.get('/edit/:id', (req, res) => {


    var uname = req.cookies['uname'];
    var type = req.cookies['type'];

    carModel.getById(req.params.id, function (result) {

        var car = {
            model: result.name,
            rentprice: result.rentprice,
            description: result.description,
            type: result.type,
            customRadio: result.isFeatured,
            image: result.image
        };
        console.log(car);
        res.render('cars/edit', { car, uname, type });
    });
})


router.post('/edit/:id', [
    check('model', 'Name cannot be empty').not().isEmpty(),
    check('rentprice', 'Rent Price cannot be empty').not().isEmpty().isNumeric(),
    check('type', 'Car type cannot be empty').not().isEmpty()

], (req, res) => {
    var file = req.files.image;
    var filename = file.name;
    var image = "/assets/uploads/" + filename;
    var car = {
        id:req.params.id,
        model: req.body.model,
        rentprice: req.body.rentprice,
        description: req.body.description,
        type: req.body.type,
        customRadio: req.body.customRadio,
        image: image
    };
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        const alerts = errors.array();

        res.render('cars/edit', { car, alerts, uname, type });
    } else {

        if (req.files.image) {

            // console.log("file paise");

            console.log(filename);
         
            file.mv('./assets/uploads/' + filename, function (err) {
                if (err) {
                    res.render('cars/edit', { car, uname, type });
                }
                else {

                    console.log(car);
                    carModel.update(car, function (status) {
                        if (status) {
                            console.log(status);
                            res.redirect("/home/cars");
                        }else{
                            res.render('cars/edit', { car, uname, type });
                        }
                    });
                }
            });
        }
        else {

        }


    }// res.redirect('/home/userlist');
})

router.get('/delete/:id', (req, res) => {
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];

    carModel.getById(req.params.id, function (result) {

        var car = {
            model: result.name,
            rentprice: result.rentprice,
            description: result.description,
            type: result.type,
            customRadio: result.isFeatured,
            image: result.image
        };
        console.log(car);
        res.render('cars/delete', { car, uname, type });
    });

})

router.post('/delete/:id', (req, res) => {
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];
    
            // res.redirect('/supAdmin_home/admin');
            carModel.delete(req.params.id, function (status) {
                if (status) {
                    res.redirect("/home/cars");
                } else {
                    res.render('cars/edit', {  uname, type });
                }
            });
       

})

router.post('/uname', (req, res) => {
    var user = {
        search: req.body.search
    };

    adminModel.search(user, function (results) {
        if (results) {

            res.json({ flag: true });
        } else {
            res.json({ flag: false });
        }
    });
});

module.exports = router;


