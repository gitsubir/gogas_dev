var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sizeSchema = new Schema({
    sizeDetail: String
});

var Size = mongoose.model('cyl_size', sizeSchema);
module.exports = Size;