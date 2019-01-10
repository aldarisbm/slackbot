require('dotenv').config
var express = require('express');
var router = express.Router();


router.post('/',(req, res)=>{
  if(req.body.challenge && req.body.type === 'url_verification'){
    return res.send(req.body.challenge);
  }
  console.log(req.body)
  res.send('Hello Sir')
})


router.post('/skills', (req, res)=>{
  console.log(req.body.text)
  res.send(`Hello ${req.body.user_name} I'm not sure what your skills are`)
})
module.exports = router;
