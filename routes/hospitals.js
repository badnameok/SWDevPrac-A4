const express = require("express")
const {getHospitals, getHospital, createHospital, updateHospital, deleteHospital} = require('../controllers/hospitals')

const router = express.Router()

const {protect,authorize} = require('../middleware/auth')



router.route('/').get(getHospitals).post(protect, authorize('admin'), createHospital);
router.route('/:id').get(getHospital).put(protect, authorize('admin'), updateHospital).delete(protect, deleteHospital);


module.exports = router