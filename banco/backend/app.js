const app = require('./config/server');

const port = 5000;
app.listen(port, function() {
    console.log('Server running at port: ', port);
});