const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema(
    {
        owner: {
            type: Schema.ObjectId,
            ref: 'Client',
            childPath: 'accounts',
            validateExistence: true,
        },
        startDate: {
            type: Date,
            default: Date.now,
            required: true,
        },
        branch: {
            type: String,
            default: 'Headquarter',
        },
        plan: {
            type: String,
            enum: ['checking','saving','payroll'],
            required: true,
        },
        balance: {
            type: Number,
            required: true,
            default: 0.00,
        },
        card: {
            type: Schema.ObjectId,
            ref: 'Card',
            childPath: 'accounts',
            validateExistence: true,
        }
    },
    {
        versionKey: false,
    }
);


module.exports = mongoose.model('Account',accountSchema);
