const bcrypt = require('bcryptjs');
exports.seed = function (knex) {
  return knex('user').truncate()
    .then(function () {
      return knex('user').insert([
        {
          "username": "admin",
          "password": bcrypt.hashSync('admin', 11),
          "department": "finances"
        },
        {
          "username": "melqui",
          "password": bcrypt.hashSync('melqui', 11),
          "department": "sales"
        },
      ]);
    });
};
