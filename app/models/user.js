const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    institutionName: {type: String, required: true},
    designation: {type: String, required: true},
    address: {type: String, required: true},
    pincode: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    isverified: {type: String, default: 'No'},
    role: {type: String, default: 'customer'},
    isuploded: {type: String, default: 'No'},
    
}, {timestamps: true })


module.exports = mongoose.model('User', userSchema);

