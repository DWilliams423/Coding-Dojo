const AuthorsContoller = require('../controllers/authors.contoller')

module.exports = function(app){
    app.get('/api/healthcheck', AuthorsContoller.healthCheck);
    app.get('/api', AuthorsContoller.index);
    app.post('/api/authors', AuthorsContoller.createAuthor);
    app.get('/api/authors', AuthorsContoller.getAllAuthors);
    app.get('/api/authors/:id', AuthorsContoller.getAuthor);
    app.put('/api/authors/:id', AuthorsContoller.updatedAuthor);
    app.delete('/api/authors/:id', AuthorsContoller.deleteAuthor);
}