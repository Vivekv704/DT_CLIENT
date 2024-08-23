// routes/eventRoutes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const {
    createEvent,
    updateEvent,
    deleteEvent,
    getEventById,
    getAllEvents,
} = require('../controllers/eventController');

const router = express.Router();

// Validation Middleware
const validateEvent = [
    body('name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
    body('description').notEmpty().withMessage('Description is required').isString().withMessage('Description must be a string'),
    body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be a valid ISO8601 date'),
    body('location').optional().isString().withMessage('Location must be a string'),
    body('category').optional().isString().withMessage('Category must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Routes
router.post('/', validateEvent, createEvent);
router.put('/:id', validateEvent, updateEvent);
router.delete('/:id', deleteEvent);
router.get('/:id', getEventById);
router.get('/', getAllEvents);

module.exports = router;
