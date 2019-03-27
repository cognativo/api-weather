var axios = require('axios')
var express = require('express');
var router = express.Router();

//Comentando para salvar novamente.

//axios.get('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
router.get('/clima', function(req, response, next) {
    axios.get('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
    .then ( function(res){
        response.send(JSON.stringify(res.data))  
    })
});

module.exports = router