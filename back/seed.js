const mongoose = require('mongoose');
const User = require('./models/user.model');
const Vehicle = require('./models/vehicle.model');
const Booking = require('./models/booking.model');
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


const vehicles = [
    { _id: new mongoose.Types.ObjectId(), brand: "Mercedes", model: "S500", year: 2020, description: "Luxury sedan with state-of-the-art technology.", image: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2021/03/prueba-mercedes-s500-4matic-2256225.jpg?tf=1200x", pricePerDay: 200, available: true },
    { _id: new mongoose.Types.ObjectId(), brand: "Mercedes", model: "E350", year: 2019, description: "A comfortable and efficient executive sedan.", image: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/591ac642f9b35bf2e19d47804bb20d56.jpg", pricePerDay: 170, available: true },
    { _id: new mongoose.Types.ObjectId(), brand: "Mercedes", model: "C300", year: 2018, description: "A stylish and sporty compact luxury sedan.", image: "https://hips.hearstapps.com/hmg-prod/images/mercedes-c-300-e-1639819479.jpg", pricePerDay: 150, available: true },
    { _id: new mongoose.Types.ObjectId(), brand: "Mercedes", model: "GLS 450", year: 2021, description: "Full-size luxury SUV with ample space and power.", image: "https://pictures.dealer.com/m/mercedesbenzofwacomb/1935/f729eedd232a1653ca4017c17818ddf3x.jpg", pricePerDay: 220, available: true },
    { _id: new mongoose.Types.ObjectId(), brand: "BMW", model: "550i", year: 2019, description: "Dynamic driving experience with premium interiors.", image: "https://a.ccdn.es/cnet/contents/media/bmw/serie_5/1169748.jpg", pricePerDay: 150, available: true },
    { _id: new mongoose.Types.ObjectId(), brand: "Audi", model: "A7", year: 2021, description: "Comfort and performance balanced in a sleek package.", image: "https://www.auto-data.net/images/f99/Audi-A7-Sportback-C8_1.jpg", pricePerDay: 180, available: true }
];


const bookings = [
    { user: users[0]._id, vehicle: vehicles[0]._id, startDate: new Date(2024, 5, 15), endDate: new Date(2024, 5, 18), price: vehicles[0].pricePerDay * 3 },
    { user: users[2]._id, vehicle: vehicles[2]._id, startDate: new Date(2024, 5, 20), endDate: new Date(2024, 5, 22), price: vehicles[2].pricePerDay * 2 },
    { user: users[1]._id, vehicle: vehicles[1]._id, startDate: new Date(2024, 5, 25), endDate: new Date(2024, 5, 30), price: vehicles[1].pricePerDay * 5 }
];


const seedDB = async () => {
    await User.deleteMany({});
    await Vehicle.deleteMany({});
    await Booking.deleteMany({});
  
    for (const user of users) {
        const newUser = new User(user);
        await newUser.save();
    }

    for (const vehicle of vehicles) {
        const newVehicle = new Vehicle(vehicle);
        await newVehicle.save();
    }

    for (const booking of bookings) {
        const newBooking = new Booking(booking);
        await newBooking.save();
    }
};

seedDB().then(() => {
    console.log(`Seeds creadas correctamente!`)
    mongoose.connection.close();
});