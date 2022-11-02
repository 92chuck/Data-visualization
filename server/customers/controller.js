const pool = require('../db');
const queries = require('./queries');

const getCustomers = async (req, res) => {
  try {
    const allCustomers = await pool.query(queries.getCustomers);
    res.status(200).json(allCustomers.rows);
  } catch (e) {
    console.error(e);
  }
};

const getCustomerById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const customer = await pool.query(queries.getCustomerById, [id]);
    if (!customer.rows.length) {
      res.send('Customer does not exists in the database!');
    } else {
      res.status(200).json(customer.rows);
    }
  } catch (e) {
    console.error(e);
  }
};

const addCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, dob } = req.body;
    const isTaken = await pool.query(queries.checkCustomerExists, [email]);
    if (isTaken.rows.length) {
      res.send('Email already exsists');
    } else {
      await pool.query(queries.addCustomer, [
        firstName,
        lastName,
        email,
        gender,
        dob,
      ]);
      res.status(201).send('Customer created successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const removeCustomer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const customer = await pool.query(queries.getCustomerById, [id]);
    if (!customer.rows.length) {
      res.send('Customer does not exists in the database!');
    } else {
      await pool.query(queries.removeCustomer, [id]);
      res.status(200).send('Customer removed successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { firstName, lastName, email, gender, dob } = req.body;

    const customer = await pool.query(queries.getCustomerById, [id]);
    if (!customer.rows.length) {
      res.send('Customer does not exists in the database!');
    } else {
      await pool.query(queries.updateCustomer, [
        firstName,
        lastName,
        email,
        gender,
        dob,
        id,
      ]);
      res.status(200).send('Customer updated successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  removeCustomer,
  updateCustomer,
};
