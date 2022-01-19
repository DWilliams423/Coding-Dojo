const PetsContoller = require('../controllers/pets.controller')

module.exports = function(app){
    app.get('/api/healthcheck', PetsContoller.healthCheck);
    app.post('/api/pets', PetsContoller.createPet);
    app.get('/api/pets', PetsContoller.getAllPets);
    app.get('/api/pets/:id', PetsContoller.getPet);
    app.put('/api/pets/:id', PetsContoller.updatedPet);
    app.delete('/api/pets/:id', PetsContoller.deletePet);
}