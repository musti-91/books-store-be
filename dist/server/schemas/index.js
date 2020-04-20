"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

var _queries = require("./queries");

var _queries2 = _interopRequireDefault(_queries);

var _mutations = require("./mutations");

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
    query: _queries2.default,
    mutation: _mutations2.default
});