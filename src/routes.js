const express = require('express');
const DevController = require('./controllers/Devcontroller');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikesController');

const routes = express.Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);



module.exports = routes;