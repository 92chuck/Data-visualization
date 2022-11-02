const getCustomers = 'SELECT * FROM customers';
const getCustomerById = 'SELECT * FROM customers WHERE id = $1';
const checkCustomerExists = 'SELECT s FROM customers s WHERE s.email = $1';
const addCustomer =
  'INSERT INTO customers (first_name, last_name, email, gender, date_of_birth) VALUES ($1, $2, $3, $4, $5)';
const removeCustomer = 'DELETE FROM customers WHERE id = $1';
const updateCustomer =
  'UPDATE customers SET first_name = $1, last_name = $2, email = $3, gender = $4, date_of_birth = $5 WHERE id = $6';

module.exports = {
  getCustomers,
  getCustomerById,
  checkCustomerExists,
  addCustomer,
  removeCustomer,
  updateCustomer,
};
