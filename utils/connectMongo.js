const mongoose = require('mongoose');

const mongoDb = async () => mongoose.connect(process.env.MONGO_DB);