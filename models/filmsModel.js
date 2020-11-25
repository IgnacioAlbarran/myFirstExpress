let conn = require('../connection/mysqlconnection');
let Films = {};
Films.fetchAll = (cb) => {
  if (!conn) return cb('No se ha podido crear la conexión');
  const SQL = "SELECT * FROM film LIMIT 5;";
  conn.query(SQL, (error, rows)=> {
    if (error) return cb(error);
    else return cb(null, rows);
  })
}

Films.insert = (film, cb)=>{
  if (!conn) return cb('No se ha podido crear la conexion');
  conn.query('INSERT INTO film SET ?', [film], (error, result) =>{
    if (error) return cb(error);
    return cb(null, result.insertId);
  })
}


module.exports = Films;