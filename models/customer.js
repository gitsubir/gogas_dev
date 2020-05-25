var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = new Schema({
    customerName: String,
    connectionType: String,
    address: String,
    idProof: String,
    subscriptionFrom: Date
});

var Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;