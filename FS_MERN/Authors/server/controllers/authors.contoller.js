const Author = require('../models/authors.model')

module.exports.healthCheck = (request,response) => {
    response.send("Health Check set up in Controller")
}

module.exports.index = (request,response) => {
    response.json({
        message: "Hello, World"
    });
}

module.exports.createAuthor = (request,response) => {
    const {authorName} = request.body;
    console.log(request.body)
    Author.create({
        authorName,
    })
        .then(author => response.json(author))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllAuthors = (request,response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAuthor = (request,response) => {
    Author.findOne({_id: request.params.id})
        .then(author => response.json(author))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatedAuthor = (request,response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch((err) => response.status(400).json(err));
}

module.exports.deleteAuthor = (request,response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}

// module.exports = {
//     healthCheck
// };