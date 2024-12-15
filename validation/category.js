const Joi = require('joi');

exports.addCategory = Joi.object().keys({
    categoryName: Joi.string().required(),
    categoryCode: Joi.string().required(),
    categoryDiscription: Joi.string().required()
});

exports.updateCategory = Joi.object().keys({
    id: Joi.string().required(),
    categoryName: Joi.string().required(),
    categoryCode: Joi.string().required(),
    categoryDiscription: Joi.string().required()
});

exports.id = Joi.object().keys({
    id: Joi.string().required(),
});
