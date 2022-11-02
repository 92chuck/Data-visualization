const getCars = 'SELECT * FROM cars';
const getCarById = 'SELECT * FROM cars WHERE id = $1';
const checkCarExists = 'SELECT s FROM cars s WHERE s.model = $1';
const addCar =
  'INSERT INTO cars (model, body_type, color, year, price) VALUES ($1, $2, $3, $4, $5)';
const removeCar = 'DELETE FROM cars WHERE id = $1';
const updateCar =
  'UPDATE cars SET model = $1, body_type = $2, color = $3, year = $4, price = $5 WHERE id = $6';

module.exports = {
  getCars,
  getCarById,
  checkCarExists,
  addCar,
  removeCar,
  updateCar,
};
