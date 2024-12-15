const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName: { type: String, default: null },
    categoryCode: { type: String, default: null, index: { unique: true } },
    categoryDiscription: { type: String, default: null },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});

categorySchema.set('toObject');
categorySchema.set('toJSON');
module.exports = mongoose.model('categorys', categorySchema);
