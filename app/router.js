const express   = require('express');

class router {
    constructor(){
        this.r = express.Router();
        this.u = [
            {
                'route'  : '/coba',
                'pesan'  : 'HALO COBA'
            },
            {
                'route'  : '/test',
                'pesan'  : 'HALO TEST'
            }
        ];
    }

    init(){
        this.r.get('*', function (req, res) {    
            const protocol = req.protocol;
            const host = req.hostname;
            const url = req.originalUrl;
            const port = process.env.PORT || PORT;
        
            const fullUrl = `${protocol}://${host}:${port}${url}`
            
            const responseString = `Full URL is: ${fullUrl}`;                       
            res.send(responseString);  
        })
        return this.r;
    }


}
module.exports = router;