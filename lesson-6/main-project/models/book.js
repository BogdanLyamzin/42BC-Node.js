const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../helpers");

const genreList = ["fantastic", "love"];
const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genreList,
        required: true,
    },
    date: {
        type: String,
        // 10-09-2009
        match: dateRegexp,
        required: true,
    }
}, {versionKey: false, timestamps: true});

bookSchema.post("save", handleMongooseError);

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
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genreList).required(),
    date: Joi.string().pattern(dateRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})

const schemas = {
    addSchema,
    updateFavoriteSchema,
};

const Book = model("book", bookSchema);

module.exports = {
    Book,
    schemas,
}