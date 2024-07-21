const Vehicle = require('../models/vehicle.model');

const vehicleController = {
    // Agregar un nuevo vehículo
    addVehicle: async (req, res) => {
        try {
            const { brand, model, image, pricePerDay, available } = req.body;
            const newVehicle = new Vehicle({
                brand,
                model,
                image,
                pricePerDay,
                available
            });

            await newVehicle.save();
            res.status(201).json({ message: 'Vehículo agregado con éxito', vehicle: newVehicle });
        } catch (error) {
            res.status(500).json({ message: 'Error al agregar el vehículo', error: error.message });
        }
    },

    // Obtener todos los vehículos
    getAllVehicles: async (req, res) => {
        try {
            const vehicles = await Vehicle.find({});
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los vehículos', error: error.message });
        }
    },

    // Obtener un vehículo específico
    getVehicle: async (req, res) => {
        try {
            const { id } = req.params;
            const vehicle = await Vehicle.findById(id);

            if (!vehicle) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.status(200).json(vehicle);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el vehículo', error: error.message });
        }
    },

    // Actualizar un vehículo
    updateVehicle: async (req, res) => {
        try {
            const { id } = req.params;
            const { brand, model, image, pricePerDay, available } = req.body;
            const updatedVehicle = await Vehicle.findByIdAndUpdate(id, {
                brand,
                model,
                image,
                pricePerDay,
                available
            }, { new: true });

            if (!updatedVehicle) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.status(200).json({ message: 'Vehículo actualizado con éxito', vehicle: updatedVehicle });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el vehículo', error: error.message });
        }
    },

    // Eliminar un vehículo
    deleteVehicle: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedVehicle = await Vehicle.findByIdAndDelete(id);

            if (!deletedVehicle) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.status(200).json({ message: 'Vehículo eliminado con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el vehículo', error: error.message });
        }
    }
};

module.exports = vehicleController;
