const server = require('./app.js');
const {
  conn
} = require('./db.js');
// Syncing all the models at once.

// { force: true }
conn.sync(

).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('Escuchando el puerto '+process.env.PORT)
  });
});
