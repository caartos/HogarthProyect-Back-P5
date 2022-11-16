const express = require("express");
const router = express.Router();

const users = require("./users.js");
const notes = require("./notes.js");
const subcategories = require("./subcategories.js");
const categories = require("./categories.js");
const subjects = require("./subjects.js");

//router.use("/users", users);
router.use("/notes", notes);
router.use("/subcategories", subcategories);
router.use("/categories", categories);
router.use("/subjects", subjects);

module.exports = router;
