const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    path: String,
    phone: {
        type: Schema.Types.ObjectId,
        ref: 'Phone'
    }
});

const Photo = mongoose.model('Photo', photoSchema);

function validatePhoto(photo) {
    const schema = {
        path: Joi.string()
    };

    return Joi.validate(photo, schema);
}
exports.schema = photoSchema;
exports.Photo = Photo;
exports.validate = validatePhoto;
