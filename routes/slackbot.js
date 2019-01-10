require('dotenv').config
var express = require('express');
var router = express.Router();


router.post('/challenge',(req, res)=>{
  res.send(req.body.challenge);
})

router.post('/', (req, res)=>{
  console.log(req.body)
})

router.post('/hello', (req, res)=>{
  res.send(req.body)
})
module.exports = router;
