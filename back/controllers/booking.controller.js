const Booking = require('../models/booking.model');
const Vehicle = require('../models/vehicle.model');

const bookingController = {
    // Crear una nueva reserva
    createBooking: async (req, res) => {
        try {
            const { user, vehicle, startDate, endDate, price, discount } = req.body;

            // Verificar disponibilidad del vehículo
            const vehicleAvailable = await Vehicle.findById(vehicle);
            if (!vehicleAvailable.available) {
                return res.status(400).json({ message: 'Vehículo no disponible' });
            }

            const newBooking = new Booking({
                user,
                vehicle,
                startDate,
                endDate,
                price,
                discount
            });

            await newBooking.save();

            // Actualizar la disponibilidad del vehículo
            await Vehicle.findByIdAndUpdate(vehicle, { available: false });

            res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la reserva', error: error.message });
        }
    },

    // Obtener reservas por usuario
    getBookingsByUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const bookings = await Booking.find({ user: userId }).populate('vehicle');

            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las reservas', error: error.message });
        }
    },

    // Obtener una reserva específica
    getBooking: async (req, res) => {
        try {
            const { id } = req.params;
            const booking = await Booking.findById(id).populate('vehicle');

            if (!booking) {
                return res.status(404).json({ message: 'Reserva no encontrada' });
            }

            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la reserva', error: error.message });
        }
    },

    // Cancelar una reserva
    cancelBooking: async (req, res) => {
        try {
            const { id } = req.params;

            const booking = await Booking.findById(id);
            if (!booking) {
                return res.status(404).json({ message: 'Reserva no encontrada' });
            }

            // Actualizar la disponibilidad del vehículo
            await Vehicle.findByIdAndUpdate(booking.vehicle, { available: true });

            await Booking.findByIdAndDelete(id);

            res.status(200).json({ message: 'Booking cancelled successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error al cancelar la reserva', error: error.message });
        }
    }
};

module.exports = bookingController;
