var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var subCategorySchema = new Schema({
    subCategoryName: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cyl_category'
    }
});

var SubCategory = mongoose.model('cyl_subcategory', subCategorySchema);
module.exports = SubCategory;