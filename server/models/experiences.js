const mongoose = require('mongoose');
const { Schema } = mongoose;

const stringRequire = {
    type: String,
    required: true,
}

const experiencesSchema = new Schema({
    location: stringRequire,
    images: String,
    cost_of_travel: Number,
    heritage_of_location: String,
    places_to_visit: String,
    ease_of_transportation: String,
    safety: String
}, {
    timestamps: true
});

const experiencesModel = mongoose.model('Experiences', experiencesSchema);
module.exports = experiencesModel;