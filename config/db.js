let mysql = require('mysql');

/* database connection */
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_online_examination'
});
connection.connect((error) => {
    if (error) {
        console.log(error.message);
    } else {
        // console.log("database connected");
    }
});
/* database connection (end) */
module.exports = connection