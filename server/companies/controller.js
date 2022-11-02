const pool = require('../db');
const queries = require('./queries');

const getCompanies = async (req, res) => {
  try {
    const allCompanies = await pool.query(queries.getCompanies);
    res.status(200).json(allCompanies.rows);
  } catch (e) {
    console.error(e);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const company = await pool.query(queries.getCompanyById, [id]);
    if (!company.rows.length) {
      res.send('Company does not exists in the database!');
    } else {
      res.status(200).json(company.rows);
    }
  } catch (e) {
    console.error(e);
  }
};

const addCompany = async (req, res) => {
  try {
    const { name } = req.body;
    const isTaken = await pool.query(queries.checkCompanyExists, [name]);
    if (isTaken.rows.length) {
      res.send('Name already exsists');
    } else {
      await pool.query(queries.addCompany, [name]);
      res.status(201).send('Company created successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const removeCompany = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const company = await pool.query(queries.getCompanyById, [id]);
    if (!company.rows.length) {
      res.send('Company does not exists in the database!');
    } else {
      await pool.query(queries.removeCompany, [id]);
      res.status(200).send('Company removed successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

const updateCompany = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const company = await pool.query(queries.getCompanyById, [id]);
    if (!company.rows.length) {
      res.send('Company does not exists in the database!');
    } else {
      await pool.query(queries.updateCompany, [name, id]);
      res.status(200).send('Compnay updated successfully!');
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getCompanies,
  getCompanyById,
  addCompany,
  removeCompany,
  updateCompany,
};
