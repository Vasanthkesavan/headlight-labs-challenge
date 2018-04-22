let mongoose = require('mongoose');
let hunterDetails = mongoose.model( 'HunterDetails', {
    name: { type: String, index: true },
    images: [String],
    hunted: [String],
    totalHunts: Number
})

module.exports = hunterDetails;