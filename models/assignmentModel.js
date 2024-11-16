const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    assignmentId: String,
    userId: String,
    task: { type: String, required: true },
    admin: String,
    status: { type: String, default: 'pending' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
