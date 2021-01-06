const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/:pet", (req, res) => {
  // Return all pets currently up for adoption.
  const { pet } = req.params;
  const resPet = Pets.get()[pet];
  if (!resPet) return res.send(`${pet} is not up for adoption`);
  res.send(resPet);
});

router.delete("/:pet", json, (req, res) => {
  // Remove a pet from adoption.
  const { pet } = req.params;
  res.send(Pets.dequeue(pet));
});

module.exports = router;
