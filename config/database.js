const { json } = require('express');
const CONFIG   = require('./config');

class database {
    constructor() {
        this.mysql      = require('mysql2');
        this.config     = new CONFIG();
        this.status;
        this.connection;
    }
    setConnection() {
        this.connection = this.mysql.createConnection({
            host        : this.config.MYSQL_CONFIG['MYSQL_1']['DB_HOST'],
            user        : this.config.MYSQL_CONFIG['MYSQL_1']['DB_USER'],
            password    : this.config.MYSQL_CONFIG['MYSQL_1']['DB_PASS'],
            database    : this.config.MYSQL_CONFIG['MYSQL_1']['DB_NAME']
        });
        return this.connection;
    }
    setStatus(status) {
        this.status = status;
    }
}

module.exports = database