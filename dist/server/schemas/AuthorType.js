"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Book = require("../Modal/Book");

var _Book2 = _interopRequireDefault(_Book);

var _Genre = require("../Modal/Genre");

var _Genre2 = _interopRequireDefault(_Genre);

var _GenreType = require("./GenreType");

var _GenreType2 = _interopRequireDefault(_GenreType);

var _BookType = require("./BookType");

var _BookType2 = _interopRequireDefault(_BookType);

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
// types


var AuthorType = new _graphql.GraphQLObjectType({
    name: "AuthorType",
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLID },
            name: { type: _graphql.GraphQLString },
            age: { type: _graphql.GraphQLInt },
            description: { type: _graphql.GraphQLString },
            born: { type: _graphql.GraphQLString },
            profilePicture: { type: _graphql.GraphQLString },
            urls: { type: (0, _graphql.GraphQLList)(_graphql.GraphQLString) },
            genre: {
                type: _GenreType2.default,
                resolve: function resolve(parent, _ref) {
                    _objectDestructuringEmpty(_ref);

                    return _Genre2.default.findById(parent.genreId);
                }
            },
            books: {
                type: (0, _graphql.GraphQLList)(_BookType2.default),
                resolve: function resolve(parent, _ref2) {
                    _objectDestructuringEmpty(_ref2);

                    return _Book2.default.find({ authorId: parent.id });
                }
            }
        };
    }
});

exports.default = AuthorType;