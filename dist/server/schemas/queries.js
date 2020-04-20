"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Book = require("../Modal/Book");

var _Book2 = _interopRequireDefault(_Book);

var _Author = require("../Modal/Author");

var _Author2 = _interopRequireDefault(_Author);

var _Genre = require("../Modal/Genre");

var _Genre2 = _interopRequireDefault(_Genre);

var _graphql = require("graphql");

var _BookType = require("./BookType");

var _BookType2 = _interopRequireDefault(_BookType);

var _GenreType = require("./GenreType");

var _GenreType2 = _interopRequireDefault(_GenreType);

var _AuthorType = require("./AuthorType");

var _AuthorType2 = _interopRequireDefault(_AuthorType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
// types

var RootQuery = new _graphql.GraphQLObjectType({
    name: "Root",
    fields: {
        // get book by Id
        book: {
            type: _BookType2.default,
            args: { id: { type: _graphql.GraphQLID } },
            resolve: function resolve(parent, _ref) {
                var id = _ref.id;
                return _Book2.default.findById(id);
            }
        },
        // get Author by Id
        author: {
            type: _AuthorType2.default,
            args: { id: { type: _graphql.GraphQLID } },
            resolve: function resolve(parent, _ref2) {
                var id = _ref2.id;
                return _Author2.default.findById(id);
            }
        },
        // get Genre by Id
        genre: {
            type: _GenreType2.default,
            args: { id: { type: _graphql.GraphQLID } },
            resolve: function resolve(parent, _ref3) {
                var id = _ref3.id;
                return _Genre2.default.findById(id);
            }
        },
        // get all genres
        genres: {
            type: (0, _graphql.GraphQLList)(_GenreType2.default),
            resolve: function resolve(parent, _ref4) {
                _objectDestructuringEmpty(_ref4);

                return _Genre2.default.find({});
            }
        },
        // get All books
        books: {
            type: (0, _graphql.GraphQLList)(_BookType2.default),
            resolve: function resolve(parent, _ref5) {
                _objectDestructuringEmpty(_ref5);

                return _Book2.default.find({});
            } // if empty object than will return full book
        },
        // get all authors
        authors: {
            type: (0, _graphql.GraphQLList)(_AuthorType2.default),
            resolve: function resolve(parent, _ref6) {
                _objectDestructuringEmpty(_ref6);

                return _Author2.default.find({});
            }
        }
    }
});

exports.default = RootQuery;