var express = require('express');
var router = express.Router();

var games = [];

router.get('/', function(req, res){
   res.send(JSON.stringify(games)); 
});

router.post('/:id', function(req,res){
    games.push(req.params.id);
    res.send({status: 'OK'});
});

module.exports = router;