const express = require('express');
const path = require('path');

const app = express();
const PORT = 3022;
// load the static folder for resources
app.use(express.static(path.join(__dirname + '/static/')));
// run server, redirect all route on index.html for express router
app.get('*', (req, res) => {
  // and returning the index.html file
  res.sendFile(path.join(__dirname + '/static/index.html'));
}).listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});