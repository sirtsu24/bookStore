const path = require('path');
const rootDirectory = require('../utilities/path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{ 
      res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
   });
   
  
   
   module.exports = router; 