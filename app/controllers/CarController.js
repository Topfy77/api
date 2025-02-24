const CarModel = require("../models/CarModel");

const CarController = {
  getAllCars: (req, res) => {
    CarModel.getAllCars((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  },

  getCarById: (req, res) => {
    const carId = req.params.id;
    CarModel.getCarById(carId, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: "Car not found" });
      res.json(results[0]);
    });
  },

  addCar: (req, res) => {
    const { name, brand, color } = req.body;
    if (!name || !brand || !color) {
      return res.status(400).json({ message: "All fields are required" });
    }
    CarModel.addCar(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      CarModel.getCarById(result.insertId, (err, car) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Car added successfully", car: car[0] });
      });
    });
  },

  updateCar: (req, res) => {
    const carId = req.params.id;
    CarModel.updateCar(carId, req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: "Car not found" });
      CarModel.getCarById(carId, (err, car) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Car updated successfully", car: car[0] });
      });
    });
  },

  deleteCar: (req, res) => {
    const carId = req.params.id;
    CarModel.getCarById(carId, (err, car) => {
      if (err) return res.status(500).json({ error: err.message });
      if (car.length === 0) return res.status(404).json({ message: "Car not found" });
      CarModel.deleteCar(carId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Car deleted successfully", deletedCar: car[0] });
      });
    });
  },
};

module.exports = CarController;
