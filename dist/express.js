"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require("express-graphql");

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schemas = require("./server/schemas");

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();
// schemas


var PORT = process.env.PORT || 5000;
var app = (0, _express2.default)();

var USERNAME = process.env.DATABASE_USERNAME;
var PASSWORD = process.env.DATABASE_PASSWORD;

_mongoose2.default.connect("mongodb://" + USERNAME + ":" + PASSWORD + "@ds029675.mlab.com:29675/gql-books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    server: {
        socketOptions: {
            socketTimeoutMS: 0,
            connectionTimeout: 0
        }
    }
});

_mongoose2.default.connection.once("open", function () {
    console.log("connected to database");
});

// allow cross origin
app.use((0, _cors2.default)());
app.use("/graphql", (0, _expressGraphql2.default)({
    schema: _schemas2.default,
    graphiql: true
}));

app.listen(PORT, function () {
    console.log(" start listening to PORT: " + PORT);
});