const express   = require('express');
const config    = require('../config/config')
const database  = require('../config/database')

class app {
    constructor(){
        this.a          = express();
        this.c          = new config();
        this.database   = new database();
    }

    init(){     
        const APP       = this.a;
        const CONFIG    = this.c;
        const PORT      = CONFIG.APP_PORT;
        // RUN APP
        APP.listen(PORT, () => {
            console.log(`Server is running on host port ${PORT}`);
        }).on('error', function (err) {
            if(err.errno === 'EADDRINUSE') {
                console.log(`----- Port ${PORT} is busy, trying with port ${PORT + 1} -----`);
                listen(PORT + 1)
            } else {
                console.log(err);
            }
        });


        // KONEKSI KE DATABASE
        APP.get('/', (req, res) => {
            const connection    = this.database.setConnection();
            connection.connect((err) => {
                if(err){
                    console.log(`Koneksi ke Database Error : ${err.message}`);
                    res.send({'pesan': `Koneksi ke Database Error : ${err.message}`});
                } else {
                    console.log(`Koneksi ke Database Berhasil`);
                    res.send({'pesan': `Koneksi ke Database Berhasil`})
                }
            })
        })
    
    }
}

module.exports = app