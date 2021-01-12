//node  js moodul path, et saada kätte faili mujalt kasutast
const path = require('path');
const rootDirectory = require('../utilities/path');
const express = require('express');

const router = express.Router(); //oskab salvestada kõik asjad objekti, et neid hiljem kasutada
//mini app pluggable to another express app

//router peab oskama hallata päringut /admin/add-product. enam ei halda päringut app vaid router

router.get('/add-product', (req, res)=>{ // see on routes, juurdepääs lehekülgedele.
 // console.log(path.join(__dirname, '..', 'views','add-product.html')); //tahan, et leiaks üles kasuta, kus asub dirname, teeks ühe sammu välja, siisläheks sisse views kausta ja leiaks faili add-product.html

    //näitan product faili vaid siis, kui tuleb päring sellele failile
   //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
   res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res)=>{
    res.redirect('/');
});

module.exports = router; //vaja router eksporteerida, muidu ei saa me seda kasutada

