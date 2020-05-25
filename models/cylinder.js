var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cylinderSchema = new Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cyl_category'
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cyl_subcategory'
    },
    sizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cyl_size'
    },
    rate:Number
});

var cylinder = mongoose.model('cyl_cylinder', cylinderSchema);
module.exports = cylinder;