const express = require('express')

const {
    listAllSeeds,
    registerSeed,
    editSeed,
    deleteSeed
} = require('./controllers/seeds')

const routes = express()

// GET SEEDS
routes.get('/seeds', listAllSeeds)

// UPSERT SEEDS
routes.post('/seeds', registerSeed)
routes.put('/seeds/:idParam', editSeed)

//DELETE SEEDS
routes.delete('/seeds/:idParam', deleteSeed)

module.exports = routes