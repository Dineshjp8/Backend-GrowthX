const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/backend')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));
