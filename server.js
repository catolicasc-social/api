const app = require('./src/app');
const config = require('./config');

app.listen(config.EXPRESS_CONFIG.PORT, () => {
  const port = app.get('port');
  console.log(`API server running on port ${port} (http://localhost:${port})`);
});

module.exports = app;
