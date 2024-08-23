const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');


// Create a new event
const createEvent = async (req, res) => {
    try {
        const db = getDB();
        const { name, description, date, location, category } = req.body;

        const newEvent = { name, description, date, location, category };
        const result = await db.collection('events').insertOne(newEvent);

        res.status(201).json({ message: 'Event created', eventId: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create event' });
    }
};

// CONTROLLER FOR GET /api/v3/app/events?id=:event_id
const getEventById = async (req, res) => {
    try {
        const db = getDB();
        const eventId = req.params.id;

        if (!ObjectId.isValid(eventId)) {
            return res.status(400).send('Invalid ID format');
        }

        const event = await db.collection('events').findOne({ _id: ObjectId(eventId) });
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get event' });
    }
};

// CONTROLLER FOR GET /api/v3/app/events?type=latest&limit=5&page=1
const getAllEvents = async (req, res) => {
    try {
        const db = getDB();
        const events = await db.collection('events').find().toArray();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get events' });
    }
};

// // CONTROLLER FOR  POST /api/v3/app/events
// const createEvent = async (req, res) => {
//     const { name, files, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;

//     const event = {
//         name,
//         files,
//         tagline,
//         schedule: new Date(schedule),
//         description,
//         moderator,
//         category,
//         sub_category,
//         rigor_rank,
//         attendees: []
//     };

//     try {
//         const db = getDB();
//         const result = await db.collection('events').insertOne(event);
//         res.status(201).json({ _id: result.insertedId });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// CONTROLER FOR PUT /api/v3/app/events/:id
const updateEvent = async (req, res) => {
    const eventId = req.params.id;

    if (!ObjectId.isValid(eventId)) {
        return res.status(400).send('Invalid ID format');
    }

    const { name, files, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;

    const updatedEvent = {
        $set: {
            name,
            files,
            tagline,
            schedule: new Date(schedule),
            description,
            moderator,
            category,
            sub_category,
            rigor_rank,
        }
    };

    try {
        const db = getDB();
        const result = await db.collection('events').updateOne({ _id: ObjectId(eventId) }, updatedEvent);
        if (result.matchedCount === 0) return res.status(404).send('Event not found');
        res.json({ message: 'Event updated' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// COTNROLER FOR DELETE /api/v3/app/events/:id
const deleteEvent = async (req, res) => {
    const eventId = req.params.id;

    if (!ObjectId.isValid(eventId)) {
        return res.status(400).send('Invalid ID format');
    }

    try {
        const db = getDB();
        const result = await db.collection('events').deleteOne({ _id: ObjectId(eventId) });
        if (result.deletedCount === 0) return res.status(404).send('Event not found');
        res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createEvent,
    getEventById,
    getAllEvents,
    updateEvent,
    deleteEvent,
};
