const app = express();

consign()
    .include('./backend/server/routes')
    .then('./backend/server/models')
    .then('./backend/server/controllers')
    .into(app)

module.exports = app;