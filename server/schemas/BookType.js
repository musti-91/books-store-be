import Author from "../Modal/Author";
import Genre from "../Modal/Genre";

import GenreType from "./GenreType";
import AuthorType from "./AuthorType";

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
} from "graphql";

const BookType = new GraphQLObjectType({
    name: "BookType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        reviews: { type: GraphQLFloat },
        rating: { type: GraphQLFloat },
        sources: {
            type: GraphQLList(GraphQLString),
        },
        published: { type: GraphQLString },
        languages: { type: GraphQLList(GraphQLString) },
        urls: { type: GraphQLList(GraphQLString) },
        pages: { type: GraphQLInt },
        price: { type: GraphQLFloat },
        awards: { type: GraphQLList(GraphQLString) },
        coverPicture: { type: GraphQLString },
        genre: {
            type: GenreType,
            resolve: (parent, {}) => Genre.findById(parent.genreId),
        },
        author: {
            type: AuthorType,
            resolve: (parent, {}) => Author.findById(parent.authorId),
        },
    }),
});

export default BookType;
