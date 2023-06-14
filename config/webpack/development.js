process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

const webpack = require('webpack')
environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePligin({
        $: 'jquery/src/jquery',
        Propper: 'popper.js'
    })
    )