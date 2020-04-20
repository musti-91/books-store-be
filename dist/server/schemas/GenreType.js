"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Book = require("../Modal/Book");

var _Book2 = _interopRequireDefault(_Book);

var _Author = require("../Modal/Author");

var _Author2 = _interopRequireDefault(_Author);

var _AuthorType = require("./AuthorType");

var _AuthorType2 = _interopRequireDefault(_AuthorType);

var _BookType = require("./BookType");

var _BookType2 = _interopRequireDefault(_BookType);

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var GenreType = new _graphql.GraphQLObjectType({
    name: "GenreType",
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLID },
            name: { type: _graphql.GraphQLString },
            description: { type: _graphql.GraphQLString },
            authors: {
                type: (0, _graphql.GraphQLList)(_AuthorType2.default),
                resolve: function resolve(parent, _ref) {
                    _objectDestructuringEmpty(_ref);

                    return _Author2.default.find({ genreId: parent.id });
                }
            },
            books: {
                type: (0, _graphql.GraphQLList)(_BookType2.default),
                resolve: function resolve(parent, _ref2) {
                    _objectDestructuringEmpty(_ref2);

                    return _Book2.default.find({ genreId: parent.id });
                }
            }
        };
    }
});

exports.default = GenreType;