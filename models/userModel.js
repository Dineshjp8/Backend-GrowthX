const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
