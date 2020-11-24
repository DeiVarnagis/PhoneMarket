const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const { schema } = require('./photo');

const phoneSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    screenSize: {
        type: Number,
        required: true,
        min: 0
    },
    RAMsize: {
        type: Number,
        required: true,
        min: 0
    },
    state: {
        type: String,
        required: true,
        minlength: 2
    },
    storageSize: {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        minlength: 7,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    images: [schema],
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Phone = mongoose.model('Phone', phoneSchema);
function validatePhone(phone) {
    const schema = {
        brand: Joi.string().required(),
        model: Joi.string().min(2).required(),
        screenSize: Joi.number().positive().required().min(3),
        RAMsize: Joi.number().positive().required().min(1),
        state: Joi.string().required(),
        storageSize: Joi.number().positive().required().min(16),
        color: Joi.string().required(),
        phoneNumber: Joi.string().min(7).max(17).required(),
        price: Joi.number().positive().required(),
        images: Joi.array().items(
            Joi.object({
                path: Joi.string()
            })
        ),
        creatorID: Joi.string().required()
    };
    return Joi.validate(phone, schema);
}

exports.Phone = Phone;
exports.validate = validatePhone;
