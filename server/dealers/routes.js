const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDealers);
router.post('/', controller.addDealer);
router.get('/:id', controller.getDealerById);
router.put('/:id', controller.updateDealer);
router.delete('/:id', controller.removeDealer);

module.exports = router;
