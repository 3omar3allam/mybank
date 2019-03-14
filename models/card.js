const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const cardSchema = new Schema(
    {
        owner: {
            type: Schema.ObjectId,
            ref: 'Client',
            childPath: 'cards',
            validateExistence: true,
        },
        number: {
            type: String,
            required: true,
            unique: true,
        },
        expireDate: {
            type: Date,
            required: true,
            default: +new Date() + 3*365*24*3600*1000,
        },
        cvc: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['credit','debit','prepaid'],
        },
        accounts: [{
            type: Schema.ObjectId,
            ref: 'Account',
        }],
    },
    {
        versionKey: false,
    }
);

cardSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Card',cardSchema);
