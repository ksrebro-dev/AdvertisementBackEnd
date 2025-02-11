const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisementController');

router.get('/', advertisementController.getAdvertisements);
router.get('/:id', advertisementController.getAdvertisement);
router.post('/', advertisementController.createAdvertisement);
router.put('/:id', advertisementController.updateAdvertisement);
router.delete('/:id', advertisementController.deleteAdvertisement);

module.exports = router;
