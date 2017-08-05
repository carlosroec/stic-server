'use strict'

const express = require('express')
const morgan = require('morgan')
const serveIndex = require('serve-index')
const opn = require('opn')

module.exports = (options) => {
    const app = express()
    const port = options.port || 3000
    const dir = options.dir || './'

    if (!options['no-log']) app.use(morgan('dev'))
    
    app.use(express.static(dir))
    app.use('/', serveIndex(dir, { icons: true }))

    app.set('port', port)
    app.listen(port, () => {
        const url = `http://localhost:${app.get('port')}`
        
        console.log(`Listenning at ${url}`)

        if (options.open) opn(url)
    })   
}
