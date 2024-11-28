class config {
    constructor(){
        // APP
        this.APP_NAME   = 'api';
        this.APP_PORT   = 8080;

        // DB_MYSQL
        this.MYSQL_CONFIG = {
            'MYSQL_1'   : {
                'DB_HOST'   : '192.168.100.231',
                'DB_PORT'   : 3306,
                'DB_NAME'   : 'sekolah',
                'DB_USER'   : 'root',
                'DB_PASS'   : 'P@ssw0rd'
            } 
        }
    }
}
module.exports = config;