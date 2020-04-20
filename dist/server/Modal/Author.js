"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authorSchema = new _mongoose.Schema({
    name: String,
    age: Number,
    genreId: String,
    description: String,
    urls: Array,
    genres: Array,
    born: String,
    books: [],
    profilePicture: String
});

exports.default = _mongoose2.default.model("Author", authorSchema);