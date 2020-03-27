const knex = require("knex");
const configuration = knex(require("../../knexfile").development);

module.exports = configuration;
