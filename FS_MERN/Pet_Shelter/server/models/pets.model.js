const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet's name required"],
        minlength: [3, "Pet's name must be at least 3 characters"]
    },
    petType: {
        type: String,
        required: [true, "Pet's type is required"],
        minlength: [3, "Pet's type must be at least 3 characters"]
    },
    petDetails: {
        type: String,
        required: [true, "Please describe the pet"],
        minlength: [3, "Pet's description must be at least 3 characters"]
    },
    petSkillOne: {
        type: String,
        required: [false]
    },
    petSkillTwo: {
        type: String,
        required: [false]
    },
    petSkillThree: {
        type: String,
        required: [false]
    }
})

module.exports = mongoose.model('Pet', PetSchema);