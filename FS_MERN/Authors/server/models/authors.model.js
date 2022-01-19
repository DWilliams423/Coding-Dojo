const mongoose = require('mongoose');

// const AuthorSchema = new mongoose.Schema({
//     authorName: {type: String},
// }, {timestamps: true});

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, "Author's name required"],
        minlength: [3, "Author's name must be at least 3 characters"]
    }
})

module.exports = mongoose.model('Author', AuthorSchema);