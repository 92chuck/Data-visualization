const pool = require('../db');
const queries = require('./queries');

const getDealers = async (req, res) => {
  try {
    const allDealers = await pool.query(queries.getDealers);
    res.status(200).json(allDealers.rows);
  } catch (e) {
    console.error(e);
  }
};

const getDealerById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dealer = await pool.query(queries.getDealerById, [id]);
    if (!dealer.rows.length) {
      res.send('Dealer does not exists in the database!');
    } else {
      res.status(200).json(dealer.rows);
    }
  } catch (e) {
    console.error(e);
  }
};

const addDealer = async (req, res) => {
  try {
    const { name, email, age, dob } = req.body;
    const isTaken = await pool.query(queries.checkDealerExists, [email]);
    if (isTaken.rows.length) {
      res.send('Email already exsists');
    } else {
      await pool.query(queries.addDealer, [name, email, age, dob]);
      res.status(201).send('Dealer created successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const removeDealer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dealer = await pool.query(queries.getDealerById, [id]);
    if (!dealer.rows.length) {
      res.send('Dealer does not exists in the database!');
    } else {
      await pool.query(queries.removeDealer, [id]);
      res.status(200).send('Dealer removed successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const updateDealer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;

    const dealer = await pool.query(queries.getDealerById, [id]);
    if (!dealer.rows.length) {
      res.send('Dealer does not exists in the database!');
    } else {
      await pool.query(queries.updateDealer, [name, email, age, dob, id]);
      res.status(200).send('Dealer updated successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getDealers,
  getDealerById,
  addDealer,
  removeDealer,
  updateDealer,
};
