'use strict';

const express = require('express');
const getModel = require('../middleware/params');
const bearer = require('../middleware/bearer-auth');
const acl = require('../middleware/acl-middleware');
const router = express.Router();
router.param('model', getModel);


router.post('/api/v1/:model', bearer, acl('CREATE'), modelHandler);
router.get('/api/v1/:model', bearer, acl('READ'), getModels);
router.get('/api/v1/:model/:id', bearer, acl('READ'), getModelById);
router.put('/api/v1/:model/:id', bearer, acl('UPDATE'), updateModel);
router.delete('/api/v1/:model/:id', bearer, acl('DELETE'), deleteModel);


function modelHandler(req, res, next) {
  //     console.log(req.headers.authorization);
  req.model.create(req.body)
    .then(record => {
      res.status(201).json(record);
    }).catch(next);
}

function getModels(req, res, next) {

  req.model.read()
    .then(record => {
      res.status(200).json(record);
    }).catch(next);
}

function getModelById(req, res, next) {

  req.model.read(req.params.id)
    .then(record => {
      res.status(200).json(record);
    }).catch(next);
}

function updateModel(req, res, next) {

  req.model.update(req.params.id, req.body)
    .then(record => {
      res.status(201).json(record);
    }).catch(next);
}

function deleteModel(req, res, next) {

  req.model.delete(req.params.id)
    .then(record => {
      res.status(200).json('the deletion  done');
    }).catch(next);
}
module.exports = router;