const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: [2],
        },
        lastName: {
            type: String,
            required: true,
            min: [2],
        },
        username: {
            index: true,
            type: String,
            required: true,
            unique: true,
            min: [6],
            max: [20],
        },
        email: {
            index: true,
            type: String,
            require: true,
            unique: true,
            match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
        },
        password: {
            type: String,
            required:true,
        },
        accounts: [{
            type: Schema.ObjectId,
            ref: 'Account',
        }],
        cards: [{
            type: Schema.ObjectId,
            ref: 'Card',
        }]
    },
    {
        versionKey: false,
    }
);

userSchema.plugin(
    uniqueValidator,
    {
        message: '{PATH} already exists.'
    }
);

module.exports = mongoose.model('Client', userSchema);
