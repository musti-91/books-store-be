"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookSchema = new _mongoose.Schema({
    name: String,
    genreId: String,
    authorId: String,
    description: String,
    reviews: Number,
    rating: Number,
    sources: Array,
    published: String,
    languages: Array,
    urls: Array,
    pages: Number,
    price: Number,
    awards: Array,
    coverPicture: String
});

exports.default = _mongoose2.default.model("Book", bookSchema);