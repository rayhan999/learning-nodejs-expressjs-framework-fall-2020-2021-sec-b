const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const carModel = require('../models/carModel');
const { compile } = require('ejs');

const router = express.Router();
const app = express();


router.get('/create', (req, res) => {
    var uname = req.cookies['uname'];
    var type = req.cookies['type'];
    console.log(uname);
    console.log(type);
    res.render('cars/create', { uname, type });
})


// })

router.post('/create', [
    check('model', 'Name cannot be empty').not().isEmpty(),
    check('rentprice', 'Rent Price cannot be empty').not().isEmpty().isNumeric(),
    check('type', 'Car type cannot be empty').not().isEmpty(),
    check('customRadio', 'Featured type cannot be empty').not().isEmpty()

    // //check('username', 'Username name must be at least 3 character').exists().isLength({min:3}),
    // check('mobile', 'mobile must be at least 4 character').exists().isLength({min:4}),
    // check('gender', 'gender must be at least 4 character').exists().isLength({min:4}),
    // check('address', 'address must be at least 5 character').exists().isLength({min:5}),
    // check('email', 'Email is not valid').isEmail().normalizeEmail()

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        const alerts = errors.array();

        res.render('cars/create', { alerts });
    } else {
        //console.log("Else e aschi");
        var uname = req.cookies['uname'];
        var type = req.cookies['type'];
        if (req.files.image) {
           // console.log("file paise");
            var file = req.files.image;
            var filename = file.name;
            console.log(filename);
            var image = "/assets/uploads/" + filename;
            file.mv('./assets/uploads/' + filename, function (err) {
                if (err) {
                    res.redirect('/cars/create', { uname, type });
                }
                else {
                    var car = {
                        model: req.body.model,
                        rentprice: req.body.rentprice,
                        description: req.body.description,
                        type: req.body.type,
                        customRadio: req.body.customRadio,
                        image: image
                    };
                    console.log(image);
                    carModel.insert(car, function (status) {
                        if (status) {
                            res.redirect("/home/cars");
                        }
                    });
                }
            });
        }
        else {
            
        }




    }
})

router.get('/edit/:id', (req, res) => {


    adminModel.getById(req.params.id, function (result) {

        var user = {
            name: result.Name,
            mobile: result.Mobile,
            email: result.Email,
            gender: result.Gender,
            address: result.Address
        };

        res.render('admin/edit', user);
    });
})


router.post('/edit/:id', [
    check('name', 'Name must be at least 4 character').exists().isLength({ min: 4 }),
    //check('username', 'Username name must be at least 3 character').exists().isLength({min:3}),
    check('mobile', 'mobile must be at least 4 character').exists().isLength({ min: 4 }),
    check('gender', 'gender must be at least 4 character').exists().isLength({ min: 4 }),
    check('address', 'address must be at least 5 character').exists().isLength({ min: 5 }),
    check('email', 'Email is not valid').isEmail().normalizeEmail()

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        const alerts = errors.array();

        res.render('admin/edit', { alerts })
    } else {

        var user = {
            id: req.params.id,

            name: req.body.name,

            mobile: req.body.mobile,
            email: req.body.email,
            gender: req.body.gender,
            address: req.body.address

        };
        adminModel.update(user, function (status) {

            if (status) {
                res.redirect('/supAdmin_home/admin');
            } else {
                res.render('admin/edit', user);
            }
        });

    }// res.redirect('/home/userlist');
})

router.get('/delete/:id', (req, res) => {
    adminModel.getById(req.params.id, function (result) {

        var user = {
            name: result.Name,
            mobile: result.Mobile,
            email: result.Email,
            gender: result.Gender,
            address: result.Address
        };

        res.render('admin/delete', user);
    });

})

router.post('/delete/:id', (req, res) => {

    adminModel.delete(req.params.id, function (status) {
        if (status) {
            // res.redirect('/supAdmin_home/admin');
            adminUserModel.delete(req.params.id, function (status) {
                if (status) {
                    res.redirect('/supAdmin_home/admin');
                } else {
                    res.render('admin/delete');
                }
            });
        } else {
            res.render('admin/delete');
        }
    });

})

router.post('/uname', (req, res) => {
    var user = {
        search: req.body.search
    };

    supModel.search(user, function (results) {
        if (results) {

            res.json({ flag: true });
        } else {
            res.json({ flag: false });
        }
    });
});

module.exports = router;


