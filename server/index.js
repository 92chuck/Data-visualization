const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();

const dealersRoutes = require('./dealers/routes');
const companiesRoutes = require('./companies/routes');
const carsRoutes = require('./cars/routes');
const customersRoutes = require('./customers/routes')

app.use(express.json());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
  res.send('server api confirmed');
});

app.use('/api/dealers', dealersRoutes);
app.use('/api/companies', companiesRoutes);
app.use('/api/cars', carsRoutes);
app.use('/api/customers', customersRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
