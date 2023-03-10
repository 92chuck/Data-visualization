const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCustomers);
router.post('/', controller.addCustomer);
router.get('/:id', controller.getCustomerById);
router.put('/:id', controller.updateCustomer);
router.delete('/:id', controller.removeCustomer);

module.exports = router;
