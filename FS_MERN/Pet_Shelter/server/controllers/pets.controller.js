const Pet = require('../models/pets.model');

module.exports.healthCheck = (request,response) => {
    response.send("Health Check set up in Controller")
}

module.exports.index = (request,response) => {
    response.json({
        message: "Hello, World"
    });
}

module.exports.createPet = (request,response) => {
    const {
        petName, 
        petType,
        petDetails,
        petSkillOne,
        petSkillTwo,
        petSkillThree
    } = request.body;
    console.log(request.body)
    Pet.create({
        petName,
        petType,
        petDetails,
        petSkillOne,
        petSkillTwo,
        petSkillThree
    })
        .then(pet => response.json(pet))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllPets = (request,response) => {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch((err) => response.status(400).json(err));
}

module.exports.getPet = (request,response) => {
    Pet.findOne({_id: request.params.id})
        .then(pet => response.json(pet))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatedPet = (request,response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedPet => response.json(updatedPet))
        .catch((err) => response.status(400).json(err));
}

module.exports.deletePet = (request,response) => {
    Pet.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}