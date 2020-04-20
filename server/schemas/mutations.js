import Book from "../Modal/Book";
import Author from "../Modal/Author";

import AuthorType from "./AuthorType";
import BookType from "./BookType";

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
} from "graphql";
import GenreType from "./GenreType";
import Genre from "../Modal/Genre";

const RootMutation = new GraphQLObjectType({
    name: "mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: (parent, { name, age }) => {
                let author = new Author({
                    name,
                    age,
                });
                return author.save();
            },
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genreId: { type: new GraphQLNonNull(GraphQLID) },
                authorId: { type: new GraphQLNonNull(GraphQLID) },
                coverPicture: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                published: { type: GraphQLString },
                languages: { type: new GraphQLList(GraphQLString) },
                urls: { type: new GraphQLList(GraphQLString) },
                pages: { type: GraphQLInt },
                reviews: { type: GraphQLFloat },
                rating: { type: GraphQLFloat },
                sources: { type: new GraphQLList(GraphQLString) },
                price: { type: GraphQLFloat },
                awards: { type: new GraphQLList(GraphQLString) },
            },
            resolve(parent, args) {
                let book = new Book({
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
                    coverPicture: args.coverPicture,
                });
                return book.save();
            },
        },
        addGenre: {
            type: GenreType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
            },
            resolve: (_, { name, description }) => {
                const genre = new Genre({
                    name,
                    description,
                });
                return genre.save();
            },
        },
        deleteBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: (parent, { id }) => Book.findByIdAndRemove(id),
        },
        deleteAuthor: {
            type: AuthorType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: (parent, { id }) => Author.findByIdAndRemove(id),
        },
        deleteGenre: {
            type: GenreType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: (_, { id }) => Genre.findOneAndRemove(id),
        },
        updateGenre: {
            type: GenreType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
            },
            resolve: (_, { id, name, description }) =>
                Genre.findByIdAndUpdate(id, { name, description }),
        },
        updateAuthor: {
            type: AuthorType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                age: { type: GraphQLInt },
                born: { type: GraphQLString },
                profilePicture: { type: GraphQLString },
                urls: { type: GraphQLList(GraphQLString) },
            },
            resolve: (
                _,
                { id, name, description, age, born, urls, profilePicture },
            ) => {
                return Author.findByIdAndUpdate(id, {
                    name,
                    description,
                    profilePicture,
                    urls,
                    born,
                    age,
                });
            },
        },
        updateBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { id, name }) => Book.findByIdAndUpdate(id, { name }),
        },
        deleteAllGenres: {
            type: GenreType,
            args: {},
            resolve: (_, {}) => Genre.remove({}),
        },
        deleteAllBooks: {
            type: BookType,
            args: {},
            resolve: (_, {}) => Book.remove({}),
        },
        deleteAllAuthors: {
            type: AuthorType,
            args: {},
            resolve: (_, {}) => Author.remove({}),
        },
    },
});

export default RootMutation;
