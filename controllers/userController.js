const { getUsers, getUserById } = require("./../utils/dbhelper");

module.exports = {
  getAllUsers: async function (req, res, next) {
    let allUsers = await getUsers();
    if (allUsers) res.status(200).send(allUsers);
    else res.status(200).send("NO DATA FROM DB!");
    res.end();
  },

  getUserById: async function (req, res, next) {
    let User = await getUserById(req.params.id);
    if (User) res.status(200).send(User);
    else res.status(200).send("NO DATA FROM DB!");
    res.end();
  },
};
