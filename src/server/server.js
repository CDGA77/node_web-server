const express = require('express');
const path = require('path');

const startServer = (opcions)=>{
    const {port,public_Path='public'} =opcions;
    console.log(port);
    console.log(public_Path);

    const app = express();

    //para podeer usar middleware se usa la palabra use
    app.use(express.static(public_Path))
    app.get('*', (req, res)=>{
        const indexpath = path.join(__dirname + `../../../${public_Path}/index.html`)
        res.sendFile(indexpath)
    })

    app.listen(port, ()=>{
        console.log(`escuchando en el puerto ${port}`)
    })
   
}


module.exports = {
    startServer
}