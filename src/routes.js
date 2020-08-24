const express = require('express');
const router = express.Router();
const { celebrate, Joi, errors, Segments } = require('celebrate');

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World, because, why not'
    });
});

router.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required()
    })
}), UserController.store);

module.exports = router;