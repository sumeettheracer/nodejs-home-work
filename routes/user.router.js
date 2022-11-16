// using the router 
const router = require('express').Router()
//post function..
const postfunction = require("../functions/postfunction");
// get function..
const getuser = require("../functions/getuser");
// get all function..
const getall = require("../functions/getall");
//the real routes...
const homePage = require("../functions/homepage");
router.get("/",homePage)
router.post("/user/register",postfunction);
router.get("/user/all",getall);
router.get("/user/:username",getuser);

module.exports = router