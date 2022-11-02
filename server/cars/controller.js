const pool = require('../db');
const queries = require('./queries');

const getCars = async (req, res) => {
  try {
    const allCars = await pool.query(queries.getCars);
    res.status(200).json(allCars.rows);
  } catch (e) {
    console.error(e);
  }
};

const getCarById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const car = await pool.query(queries.getCarById, [id]);
    if (!car.rows.length) {
      res.send('Car does not exists in the database!');
    } else {
      res.status(200).json(car.rows);
    }
  } catch (e) {
    console.error(e);
  }
};

const addCar = async (req, res) => {
  try {
    const { model, body_type, color, year, price } = req.body;
    const isTaken = await pool.query(queries.checkCarExists, [model]);
    if (isTaken.rows.length) {
      res.send('Car already exsists');
    } else {
      await pool.query(queries.addCar, [model, body_type, color, year, price]);
      res.status(201).send('Car created successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const removeCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const car = await pool.query(queries.getCarById, [id]);
    if (!car.rows.length) {
      res.send('Car does not exists in the database!');
    } else {
      await pool.query(queries.removeCar, [id]);
      res.status(200).send('Car removed successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { model, body_type, color, year, price } = req.body;

    const car = await pool.query(queries.getCarById, [id]);
    if (!car.rows.length) {
      res.send('Car does not exists in the database!');
    } else {
      await pool.query(queries.updateCar, [
        model,
        body_type,
        color,
        year,
        price,
        id,
      ]);
      res.status(200).send('Car updated successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getCars,
  getCarById,
  addCar,
  removeCar,
  updateCar,
};
