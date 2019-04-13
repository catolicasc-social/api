const app = require('./src/app');
const config = require('./config');

app.listen(config.port, () => {
  const port = app.get('port');
  console.log(`API server running on port ${port} (http://localhost:${config.port})`);
});

module.exports = app;
