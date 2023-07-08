const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5431,
    database: 'node_postgres'
})

module.exports = pool