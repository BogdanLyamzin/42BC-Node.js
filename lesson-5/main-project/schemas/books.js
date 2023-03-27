const Joi = require("joi");

const addSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": `"title" must be exist`,
        "string.base": `"title" must be string`,
        "string.empty": `"title" cannot be empty`
    }),
    author: Joi.string().required().messages({
        "any.required": `"author" must be exist`,
        "string.base": `"author" must be string`,
        "string.empty": `"author" cannot be empty`
    }),
});

module.exports = {
    addSchema,
}