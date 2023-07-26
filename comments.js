// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Create routes
router.get('/', commentsController.index);
router.get('/create', commentsController.create);
router.post('/create', commentsController.store);
router.get('/edit/:id', commentsController.edit);
router.post('/edit/:id', commentsController.update);
router.get('/delete/:id', commentsController.delete);
router.post('/delete/:id', commentsController.destroy);

// Export module
module.exports = router;

// Path: commentsController.js
// Create controller
