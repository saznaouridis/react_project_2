const express = require("express");
const router = express.Router();
const client = require('./db');
client.connect();

//  RETRIEVE ALL RECORDS FROM DATABASE TABLE

router.get('/', async (req, res, next) => {

    try{
        const results = await client.query('SELECT * FROM countries ORDER BY id ASC');
        res.status(200).json(results.rows)
    }catch(err){
        
        console.error(err.message)
    }
})

// ADD NEW RECORD INTO THE DATABASE

router.post('/', async (req, res, next) => {
   
        const { name, capital } = req.body;
        try{
        const id = await client.query('INSERT INTO countries (name, capital) VALUES ($1, $2) RETURNING id', [name, capital])
        res.status(200).send(id);
        }catch(err){
            console.error(err.message)
        }
})

// CREATE ROUTE FUNCTION TO UPDATE EXISTING DATABASE RECORDS

router.put('/:id', async (req, res, next) => {

        const id = parseInt(req.params.id)
        const { name, capital } = req.body
        try{
        await client.query('UPDATE countries SET name = $1, capital = $2 WHERE id = $3', [name, capital, id])
        res.status(200).send('Country has been updated in the database')
        }catch(err){
            console.error(err.message)
        }
})

// CREATE ROUTE FUNCTION TO DELETE A RECORD FROM THE DATABASE TABLE

router.delete('/:id', async (req, res, next) => {
    
    const id = parseInt(req.params.id)
    try{
        await client.query('DELETE FROM countries WHERE id = $1', [id])
        res.status(200).send(`Country deleted with ID: ${id}`)
    }catch(err){
        console.error(err.message)
    }
})

module.exports = router;