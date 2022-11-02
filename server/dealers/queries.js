const getDealers = 'SELECT * FROM dealers';
const getDealerById = 'SELECT * FROM dealers WHERE id = $1';
const checkDealerExists = 'SELECT s FROM dealers s WHERE s.email = $1';
const addDealer =
  'INSERT INTO dealers (name, email, age, dob) VALUES ($1, $2, $3, $4)';
const removeDealer = 'DELETE FROM dealers WHERE id = $1';
const updateDealer =
  'UPDATE dealers SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5';

module.exports = {
  getDealers,
  getDealerById,
  checkDealerExists,
  addDealer,
  removeDealer,
  updateDealer,
};
