const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCars);
router.post('/', controller.addCar);
router.get('/:id', controller.getCarById);
router.put('/:id', controller.updateCar);
router.delete('/:id', controller.removeCar);

module.exports = router;
