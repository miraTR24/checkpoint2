const express = require("express");
const moment = require('moment');
const router = express.Router();

//req.time = moment.tz('America/Lima')



const checkTime = (req, res, next) => {
  
  let now = moment().format('dddd');
  let hour=moment().hours();
  if (now.toLocaleLowerCase()==="saturday"||now.toLocaleLowerCase()==="sunday"&&hour>17||hour<9) {
    res.send("we are sleeping come later :)");
  }
 else {
    next();
  }
  
};
module.exports = () => {
  router.get('/',checkTime,function(req, res){
 
    // Rendering home.ejs page
    res.render('layouts');
})
  router.get('/ourServices',checkTime, function(req, res){
 
    // Rendering home.ejs page
    res.render('layouts/ourServices');
})
router.get('/contactUs',checkTime, function(req, res){
 
  // Rendering home.ejs page
  res.render('layouts/contactUs');
})
  
  return router;
};