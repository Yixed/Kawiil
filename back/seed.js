const mongoose = require('mongoose');
const User = require('./models/user.model');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

  const users = [
    { _id: new mongoose.Types.ObjectId(), name: "Alice Johnson", email: "alice@example.com", password: "password123", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "Bob Smith", email: "bob@example.com", password: "password123", role: "admin" },
    { _id: new mongoose.Types.ObjectId(), name: "Charlie Brown", email: "charlie@example.com", password: "password123", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "Dana Scully", email: "dana@example.com", password: "password123", role: "admin" }
];

seedDB().then(() => {
    console.log(`Seeds creadas correctamente!`)
    mongoose.connection.close();
});
