const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Adventure'},
    {id: 3, name: 'Comedy'},
    {id: 4, name: 'Crime'},
    {id: 5, name: 'Drama'},
    {id: 6, name: 'Horror'},
    {id: 7, name: 'Romance'},
    {id: 8, name: 'Sci-Fi'},
    {id: 9, name: 'Thriller'},
    {id: 10, name: 'Violence'}
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
})

app.post('/api/genres', (req, res) => {
    const {error} = validateGenre(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genres);
})

app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with the given ID does not exist');

    const {error} = validateGenre(req.body);
    
    if(error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
})

app.get('/', (req, res) => {
    res.send('VIDLY APPLICATION');
});


function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})