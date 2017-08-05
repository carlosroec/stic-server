#!/usr/bin/env node
'use strict'

const cli = require('cli')
const serve = require('./lib/serve')


cli.parse({
    'dir': ['d', 'Serve directory', 'string', './'],
    'port': ['p', 'Serve in different port', 'number', 3000],
    'open': ['o', 'Opens the url in the default browser'],
    'no-log': ['nl', 'Disable log']
})

cli.main((args, options) => {
    serve(options)
})


