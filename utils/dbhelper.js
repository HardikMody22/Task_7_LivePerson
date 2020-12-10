const got = require("got");
require("dotenv").config();
const db = require("../models");
module.exports = {
  getUsers: async function () {
    const users = await db.table_users.findAll({
      attributes: ["id","firstName", "lastName"],
    });
    return users;
  },
  getUserById: async function (id) {
    const User = db.table_users.findAll({
      where: {
        id: id,
      },
    });

    return User;
  },
};
