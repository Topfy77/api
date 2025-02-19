const db = require("../../config");

const CarModel = {
  getAllCars: (callback) => {
    db.query("SELECT * FROM car", callback);
  },

  getCarById: (id, callback) => {
    db.query("SELECT * FROM car WHERE id = ?", [id], callback);
  },

  addCar: (carData, callback) => {
    const { name, brand, color } = carData;
    db.query(
      "INSERT INTO car (name, brand, color) VALUES (?,?, ?)",
      [name, brand, color],
      callback
    );
  },

  updateCar: (id, carData, callback) => {
    const { name, brand, color } = carData;
    db.query(
      "UPDATE car SET name = ?, brand = ?, color = ? WHERE id = ?",
      [name, brand, color, id],
      callback
    );
  },

  deleteCar: (id, callback) => {
    db.query("DELETE FROM car WHERE id = ?", [id], callback);
  },
};

module.exports = CarModel;
