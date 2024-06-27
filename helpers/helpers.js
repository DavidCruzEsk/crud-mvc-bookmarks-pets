//Middleware function: fires if the request url params is invalid
function invalidIndex(req, res, next) {
    const { arrayIndex } = req.params;

    if (isNaN(arrayIndex) || arrayIndex < 0) {
        return res.status(400).json({ error: 'Invalid array index'});
    }
    next();
}

function bookmarksValidation(req, res, next) {
    if (!('name' in req.body)) {
        res.status(400).json({ error: '"name" key must be included' });
    } else if (typeof req.body.name !== 'string') {
        res.status(400).json({ error: 'Value of "name" must be a string type' });
    }

    if (!('url' in req.body)) {
        res.status(400).json({ error: '"url" key must be included' });
    } else if (typeof req.body.url !== 'string') {
        res.status(400).json({ error: 'Value of "url" must be a string type' });
    }

    if (!('isFavorite' in req.body)) {
        res.status(400).json({ error: '"isFavorite" key must be included' });
    } else if (typeof req.body.isFavorite !== 'boolean') {
        res.status(400).json({ error: 'Value of "isFavorite" must be a boolean type' });
    }

    if (!('category' in req.body)) {
        res.status(400).json({ error: '"category" key must be included' });
    } else if (typeof req.body.category !== 'string') {
        res.status(400).json({ error: 'Value of "category" must be a string type' });
    }

    next();
}

function petsValidation(req, res, next) {
    if (!('name' in req.body)) {
        res.status(400).json({ error: '"name" key must be included' });
    } else if (typeof req.body.name !== 'string') {
        res.status(400).json({ error: 'Value of "name" must be a string type' });
    }

    if (!('url' in req.body)) {
        res.status(400).json({ error: '"url" key must be included' });
    } else if (typeof req.body.url !== 'string') {
        res.status(400).json({ error: 'Value of "url" must be a string type' });
    }

    if (!('breed' in req.body)) {
        res.status(400).json({ error: '"breed" key must be included' });
    } else if (typeof req.body.breed !== 'string') {
        res.status(400).json({ error: 'Value of "breed" must be a string type' });
    }

    if (!('age' in req.body)) {
        res.status(400).json({ error: '"age" key must be included' });
    } else if (typeof req.body.age !== 'number') {
        res.status(400).json({ error: 'Value of "age" must be a string type' });
    }

    next();
}
 
module.exports = { invalidIndex, bookmarksValidation, petsValidation };