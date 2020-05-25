var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new Schema({
    categoryName: String
});

var Category = mongoose.model('cyl_category', categorySchema);
module.exports = Category;