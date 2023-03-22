const express = require("express");

const books = require("../../data/books");

const router = express.Router();

router.get("/", async(req, res)=> {
    res.json(books);
});

router.get("/:id", async(req, res)=> {
    res.json(books[0])
});

router.post("/", async(req, res)=> {
    res.status(201).json(books[0])
})

module.exports = router;