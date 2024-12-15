const { lowerCase, size } = require('lodash');
const utils = require('../utils/apiHelper');
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const { Category } = require('../models');

exports.addCategory = async (payloadData, res) => {
    const params = payloadData.body;

    const checkcategoryCodeAlreadyExist = await utils.getData(Category, {
        query: { categoryCode: lowerCase(params.categoryCode), isDeleted: false },
        fields: ['_id'],
    });
    if (size(checkcategoryCodeAlreadyExist)) {
        return sendErorMessage('This category is already registered with us.', {}, res);
    }
    const obj = {
        categoryName: params.categoryName,
        categoryCode: lowerCase(params.categoryCode),
        categoryDiscription: params.categoryDiscription,
    };
    const data = await utils.saveData(Category, obj);
    return sendSuccessMessage('success', data, res);
};

exports.updateCategory = async (payloadData, res) => {
    const pararms = payloadData.body;

    const obj = {
        categoryName: pararms.categoryName,
        categoryCode: lowerCase(pararms.categoryCode),
        categoryDiscription: pararms.categoryDiscription,
    };
    const data = await utils.updateData(Category, { _id: pararms.id }, obj);
    return sendSuccessMessage('success', data, res);
};
exports.deleteCategory = async (payloadData, res) => {
    const pararms = payloadData.query;

    await await utils.updateData(Category, { _id: pararms.id }, { isDeleted: true });
    return sendSuccessMessage('success', {}, res);
};
exports.getCategory = async (payloadData, res) => {
    const data = await utils.getData(Category, {
        query: { isDeleted: false },
    });
    return sendSuccessMessage('success', data, res);
};
exports.getCategoryById = async (payloadData, res) => {
    const pararms = payloadData.query;

    const data = await utils.getData(Category, { query: { _id: pararms.id, isDeleted: false } });
    return sendSuccessMessage('success', data, res);
};