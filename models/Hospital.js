const moongoose = require('mongoose');

const HospitalSchema = new moongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address'],
    },
    district: {
        type: String,
        required: [true, 'Please add a district'],
    },
    province: {
        type: String,
        required: [true, 'Please add a province'],
    },
    postalcode: {
        type: String,
        required: [true, 'Please add a postal code'],
        maxlength: [5, 'Postal code can not be more than 5 digits']
    },
    tel: {
        type: String,
    },
    region: {
        type: String,
        required: [true, 'Please add a region'],
    }
});

module.exports = moongoose.model('Hospital', HospitalSchema);
