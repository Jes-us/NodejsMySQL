const connection = require('./conection');

const allitems = async () => { 
  const [rows] = await connection.query('SELECT * FROM clientes');
  return rows;
} 

module.exports =  allitems;

