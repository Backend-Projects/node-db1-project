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

router.get("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .then((acct) => {
      res.status(200).json(acct);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "server error. Unable to retrieve account" });
    });
});

router.post("/", (req, res) => {
  db("accounts")
  .insert(req.body, "id")
  .then( acct => {
    res.status(201).json(acct)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: "server error. Unable to create account" })
  })
});

router.put("/:id", (req, res) => {
  db("accounts")
  .where({ id: req.params.id})
  .update(req.body)
  .then(changes => {
    res.status(200).json(changes);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: "server error. Unable to update account"})
  })
});

router.delete("/:id", (req, res) => {
  db("accounts")
  .where({ id: req.params.id})
  .del()
  .then(deleted => {
    res.status(204).json({message: "succesfully deleted account"})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: "server error. Unable to delete account"})
  })
});

module.exports = router;
