const express = require('express')
const path = require('path')
const authenticator = require('../authenticator/authenticator')
const config = require('../config.json')
const router = express.Router()

router.use((req, res, next) => {
    if (authenticator.authenticateUser(req, res))
        next()
    else  
        res.redirect(302, '/login')
})

router.use('/secure-pages', express.static(path.resolve('secure/pages')))
router.use('/secure-utils', express.static(path.resolve('secure/util')))
router.use('/secure-templates', express.static(path.resolve('secure/templates')))

router.get('/home', (req, res) => {
    res.sendFile(path.resolve('secure/pages/home/home.html'))
})

module.exports = router;