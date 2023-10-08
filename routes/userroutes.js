const {signup}  = require('../controllers/user-controller');
// console.log(signup)

const router = require('express').Router();



router.post("/signup" , signup);





module.exports = router;