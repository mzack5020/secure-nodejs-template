const express = require('express')
const path = require('path')
const config = require('../config.json')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.redirect('/home')
})

router.get('/login', (req, res) => {
    res.status(200).sendFile(path.resolve('public/login/login.html'))
})

router.post('/login', (req, res, next) => {
    console.log('post login')
    res.sendStatus(200)
})

router.get('/logout', (req, res) => {
    res.redirect(302, '/login')
})

router.get('/register', (req, res) => {
    res.status(200).sendFile(path.resolve('public/register/register.html'))
})

router.post('/register', (req, res) => {
    console.log('post register')
    res.sendStatus(200)
})

router.post('/logout', (req, res) => {
    console.log('post logout')
})

module.exports = router;