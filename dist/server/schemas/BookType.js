"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Author = require("../Modal/Author");

var _Author2 = _interopRequireDefault(_Author);

var _Genre = require("../Modal/Genre");

var _Genre2 = _interopRequireDefault(_Genre);

var _GenreType = require("./GenreType");

var _GenreType2 = _interopRequireDefault(_GenreType);

var _AuthorType = require("./AuthorType");

var _AuthorType2 = _interopRequireDefault(_AuthorType);

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var BookType = new _graphql.GraphQLObjectType({
    name: "BookType",
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLID },
            name: { type: _graphql.GraphQLString },
            description: { type: _graphql.GraphQLString },
            reviews: { type: _graphql.GraphQLFloat },
            rating: { type: _graphql.GraphQLFloat },
            sources: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
            },
            published: { type: _graphql.GraphQLString },
            languages: { type: (0, _graphql.GraphQLList)(_graphql.GraphQLString) },
            urls: { type: (0, _graphql.GraphQLList)(_graphql.GraphQLString) },
            pages: { type: _graphql.GraphQLInt },
            price: { type: _graphql.GraphQLFloat },
            awards: { type: (0, _graphql.GraphQLList)(_graphql.GraphQLString) },
            coverPicture: { type: _graphql.GraphQLString },
            genre: {
                type: _GenreType2.default,
                resolve: function resolve(parent, _ref) {
                    _objectDestructuringEmpty(_ref);

                    return _Genre2.default.findById(parent.genreId);
                }
            },
            author: {
                type: _AuthorType2.default,
                resolve: function resolve(parent, _ref2) {
                    _objectDestructuringEmpty(_ref2);

                    return _Author2.default.findById(parent.authorId);
                }
            }
        };
    }
});

exports.default = BookType;