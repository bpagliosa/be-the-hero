const knex = require("knex");
const configuration = knex(
  process.env.NODE_ENV === "test"
    ? require("../../knexfile").test
    : require("../../knexfile").development
);

module.exports = configuration;
