const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = Promise

