/* 

author: april legaspi
nucamp node js workshop 1
this module will handle the endpoints for campsite as well as operations 

*/

//importing required modules
const express = require('express');
const campsiteRouter = express.Router();

//routes for campsites
campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

//routes for /campsites/:campsiteId
campsiteRouter.route('/:campsiteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
    })
    .put((req, res) => {
        res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
        res.end(`Will update the campsite with name: ${req.body.name} and description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting campsite: ${req.params.campsiteId}`);
    });

//exports the router
module.exports = campsiteRouter;
