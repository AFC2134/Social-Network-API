const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormat');


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please enter information about a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'Username required!',
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);