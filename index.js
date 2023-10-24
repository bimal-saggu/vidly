const express = require('express');

const app = express();

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, naem: 'Adventure'},
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

app.get('/', (req, res) => {
    res.send('VIDLY APPLICATION');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})