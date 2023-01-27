const router = require('express').Router();
const db = require("../models");

router.get('/', async (req, res) => {
  const usersLists = await db.User.FindAll({});
const users=users.usersLists.map(user=user.get({plain:true}));
console.log(users);
res.render('homepage',{users});
});

module.exports = router;
