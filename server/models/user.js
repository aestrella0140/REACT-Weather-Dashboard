const { Schema, model } = require('mongoose');

const brypt = require('bcrypt');

// firstName is a property given it has to be required and trim whitespace when entered.
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    }
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await brypt.hash(this.password, saltRounds);
    }
    next();
});
// compare incoming password with hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await brypt.compare(password, this.password);
};

const User = model('User', userSchema);
// export module
module.exports = User;