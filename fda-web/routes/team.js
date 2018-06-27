var express = require('express');
var router = express.Router();

/* GET team page. */
router.get('/:teamName', function(req, res, next) {
    var teamName = req.params.teamName;
    
    res.render('team', {
        title: 'Team',
        team: teamName
      });
});

module.exports = router;
