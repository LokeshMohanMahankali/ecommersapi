const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is succesfull");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send("user usernam e is: " + username);
});

module.exports = router;
