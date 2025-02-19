const express = require("express");
const CarController = require("../controllers/CarController");

const router = express.Router();

router.get("/cars", CarController.getAllCars);
router.get("/cars/:id", CarController.getCarById);
router.post("/cars", CarController.addCar);
router.put("/cars/:id", CarController.updateCar);
router.delete("/cars/:id", CarController.deleteCar);

module.exports = router;
