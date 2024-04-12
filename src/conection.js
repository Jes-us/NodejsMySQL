const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({ 
  host: 'host',
  port: 'port',
  user: 'user', 
  password: 'pass',
  database: 'database'
});  

module.exports = connection;

// Path: src/controllers/employeeController.js