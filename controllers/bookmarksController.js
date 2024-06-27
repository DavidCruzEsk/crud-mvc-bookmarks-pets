const express = require('express');
// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router();

// Import the bookmarks model
const bookmarksArray = require('../models/bookmark');
const { invalidIndex, bookmarksValidation } = require('../helpers/helpers');

// Index Routes: gets all of the bookmarks
// localhost:4001/bookmarks/
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray);
});

bookmarks.get('/:arrayIndex', invalidIndex, (req, res) => {
    const { arrayIndex } = req.params;
    if (bookmarksArray[arrayIndex]) {
        res.status(200).json(bookmarksArray[arrayIndex]);
    } else {
        res.status(400).json({ error: "Not found" });
    }
}); 

bookmarks.post('/', bookmarksValidation, (req, res) => {
    bookmarksArray.push(req.body);
    res.status(201).json(bookmarksArray[bookmarksArray.length - 1]);
});

bookmarks.delete('/:arrayIndex', invalidIndex, (req, res) => {
    const { arrayIndex } = req.params;

    if (bookmarksArray[arrayIndex]) {
        const deletedBookmark = bookmarksArray.splice(arrayIndex, 1);
        res.json(deletedBookmark);
    } else {
        res.status(404).json({ error: "Data not found" });
    }
});

bookmarks.put('/:arrayIndex', invalidIndex, bookmarksValidation, (req, res) => {
    const { arrayIndex } = req.params;

    if (bookmarksArray[arrayIndex]) {
        bookmarksArray[arrayIndex] = req.body;
        res.status(200).json(bookmarksArray[arrayIndex]);
    } else {
        res.status(404).json({ error: "Index to update, not found" });
    }
});

module.exports = bookmarks;