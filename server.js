const express = require ('express');
const path = require('path');
const rootDirectory = require('./utilities/path');
const adminRouter = require('./routes/admin'); //js ei ole vaja lisada, kuna express teeb seda automaatselt
const shopRouter = require('./routes/shop');
const app = express();

/*app.get('/admin/add-product', (req, res)=>{ // see on routes, juurdepääs lehekülgedele.
    res.send('hello from admin');
});*/

app.use('/admin', adminRouter); //oskab hallata kõiki http päringu töö meetodid. admin - is a filter
app.use(shopRouter);
//404 peab olema kõige viimane
app.use((req, res)=>{
    res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
});

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});