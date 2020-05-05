const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
    .then((acct) => {
      res.status(200).json(acct);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "server error. Unable to retrieve accounts" });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
