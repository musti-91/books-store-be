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

var _GenreType = require("./GenreType");

var _GenreType2 = _interopRequireDefault(_GenreType);

var _Genre = require("../Modal/Genre");

var _Genre2 = _interopRequireDefault(_Genre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var RootMutation = new _graphql.GraphQLObjectType({
    name: "mutation",
    fields: {
        addAuthor: {
            type: _AuthorType2.default,
            args: {
                name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
                age: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
            },
            resolve: function resolve(parent, _ref) {
                var name = _ref.name,
                    age = _ref.age;

                var author = new _Author2.default({
                    name: name,
                    age: age
                });
                return author.save();
            }
        },
        addBook: {
            type: _BookType2.default,
            args: {
                name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
                genreId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
                authorId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
                coverPicture: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
                description: { type: _graphql.GraphQLString },
                published: { type: _graphql.GraphQLString },
                languages: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
                urls: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
                pages: { type: _graphql.GraphQLInt },
                reviews: { type: _graphql.GraphQLFloat },
                rating: { type: _graphql.GraphQLFloat },
                sources: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
                price: { type: _graphql.GraphQLFloat },
                awards: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
            },
            resolve: function resolve(parent, args) {
                var book = new _Book2.default({
                    name: args.name,
                    genreId: args.genreId,
                    authorId: args.authorId,
                    description: args.description,
                    published: args.published,
                    languages: args.languages,
                    urls: args.urls,
                    pages: args.pages,
                    reviews: args.reviews,
                    rating: args.rating,
                    sources: args.sources,
                    price: args.price,
                    awards: args.awards,
                    coverPicture: args.coverPicture
                });
                return book.save();
            }
        },
        addGenre: {
            type: _GenreType2.default,
            args: {
                name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
                description: { type: _graphql.GraphQLString }
            },
            resolve: function resolve(_, _ref2) {
                var name = _ref2.name,
                    description = _ref2.description;

                var genre = new _Genre2.default({
                    name: name,
                    description: description
                });
                return genre.save();
            }
        },
        deleteBook: {
            type: _BookType2.default,
            args: {
                id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
            },
            resolve: function resolve(parent, _ref3) {
                var id = _ref3.id;
                return _Book2.default.findByIdAndRemove(id);
            }
        },
        deleteAuthor: {
            type: _AuthorType2.default,
            args: {
                id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
            },
            resolve: function resolve(parent, _ref4) {
                var id = _ref4.id;
                return _Author2.default.findByIdAndRemove(id);
            }
        },
        deleteGenre: {
            type: _GenreType2.default,
            args: {
                id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
            },
            resolve: function resolve(_, _ref5) {
                var id = _ref5.id;
                return _Genre2.default.findOneAndRemove(id);
            }
        },
        updateGenre: {
            type: _GenreType2.default,
            args: {
                id: { type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID) },
                name: { type: _graphql.GraphQLString },
                description: { type: _graphql.GraphQLString }
            },
            resolve: function resolve(_, _ref6) {
                var id = _ref6.id,
                    name = _ref6.name,
                    description = _ref6.description;
                return _Genre2.default.findByIdAndUpdate(id, { name: name, description: description });
            }
        },
        updateAuthor: {
            type: _AuthorType2.default,
            args: {
                id: { type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID) },
                name: { type: _graphql.GraphQLString },
                description: { type: _graphql.GraphQLString },
                age: { type: _graphql.GraphQLInt },
                born: { type: _graphql.GraphQLString },
                profilePicture: { type: _graphql.GraphQLString },
                urls: { type: (0, _graphql.GraphQLList)(_graphql.GraphQLString) }
            },
            resolve: function resolve(_, _ref7) {
                var id = _ref7.id,
                    name = _ref7.name,
                    description = _ref7.description,
                    age = _ref7.age,
                    born = _ref7.born,
                    urls = _ref7.urls,
                    profilePicture = _ref7.profilePicture;

                return _Author2.default.findByIdAndUpdate(id, {
                    name: name,
                    description: description,
                    profilePicture: profilePicture,
                    urls: urls,
                    born: born,
                    age: age
                });
            }
        },
        updateBook: {
            type: _BookType2.default,
            args: {
                id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
                name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
            },
            resolve: function resolve(_, _ref8) {
                var id = _ref8.id,
                    name = _ref8.name;
                return _Book2.default.findByIdAndUpdate(id, { name: name });
            }
        },
        deleteAllGenres: {
            type: _GenreType2.default,
            args: {},
            resolve: function resolve(_, _ref9) {
                _objectDestructuringEmpty(_ref9);

                return _Genre2.default.remove({});
            }
        },
        deleteAllBooks: {
            type: _BookType2.default,
            args: {},
            resolve: function resolve(_, _ref10) {
                _objectDestructuringEmpty(_ref10);

                return _Book2.default.remove({});
            }
        },
        deleteAllAuthors: {
            type: _AuthorType2.default,
            args: {},
            resolve: function resolve(_, _ref11) {
                _objectDestructuringEmpty(_ref11);

                return _Author2.default.remove({});
            }
        }
    }
});

exports.default = RootMutation;