let HunterDetails = require('../database/model/hunterDetails');
let FormData = require('form-data');

module.exports = function(app) {
    app.post('/api/saveHunter', function(req, res) {
        console.log(req.body.name)
        HunterDetails.find({name: req.body.name}, function(err, docs) {
            if(docs.length) {
                console.log('This is the docs: ', docs);
                docs[0]['images'].push(req.body.images);
                docs[0]['hunted'].push(req.body.hunted);
                docs[0]['totalhunts']++;
                docs[0].save(function(err) {
                    if(err) res.status(404).send("Error in update");
                    res.status(200).send({ "status": "Succesfully Updated" })
                })
                
            } else {
                let hunterDetail = new HunterDetails({
                    name: req.body.name,
                    images: [],
                    hunted: [],
                    totalHunts: req.body.totalHunts
                });
                hunterDetail.images.push(req.body.images);
                hunterDetail.hunted.push(req.body.hunted);
                hunterDetail.save(function(err) {
                    if(err) res.send({ "status": "Error in Saving" });
                    res.status(200).send({ "status": "Successfully Saved" });
                })
            }
        });
    });

    app.get('/api/getRecentSuspects', function(req, res) {
        HunterDetails.find().limit(10).exec(function(err, suspects) {
            if(err) res.status(404).send("Error");
            let data = suspects;
            let recentSuspectImages = [];
            data.forEach(function(suspect) {
                suspect['images'].forEach(function(image) {
                  recentSuspectImages.push(image);
                })
              })
            res.status(200).send(recentSuspectImages);
        })
    });

    app.get('/api/leaderboard', function(req, res) {
        HunterDetails.find({}, function(err, data) {
            if(err) res.status(404).send("Error");
            res.status(200).send(data);
        })
    })
};
