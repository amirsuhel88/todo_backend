const express = require("express");
const router = express.Router();
const Contact = require("../modules/Contact");

router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save().then((savedContact) => {
      console.log(savedContact);
      res.status(201).json({ msg: "Contact successfully saved" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to save new contact" });
  }
});

module.exports = router;
