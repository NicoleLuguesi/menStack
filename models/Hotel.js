const mongoose = require('mongoose');
const { reservationSchema } = require("./Reservation");

const hotelSchema = new mongoose.model('Hotel', new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    reservation: [reservationSchema]
})
);

exports.hotelSchema = hotelSchema;