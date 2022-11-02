const getCompanies = 'SELECT * FROM companies';
const getCompanyById = 'SELECT * FROM companies WHERE id = $1';
const checkCompanyExists = 'SELECT s FROM companies s WHERE s.name = $1';
const addCompany = 'INSERT INTO companies (name) VALUES ($1)';
const removeCompany = 'DELETE FROM companies WHERE id = $1';
const updateCompany = 'UPDATE companies SET name = $1 WHERE id = $2';

module.exports = {
  getCompanies,
  getCompanyById,
  checkCompanyExists,
  addCompany,
  removeCompany,
  updateCompany,
};
