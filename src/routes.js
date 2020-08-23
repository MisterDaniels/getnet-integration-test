const express = require('express');
const router = express.Router();
const { celebrate, Joi, errors, Segments } = require('celebrate');

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required()
    })
}), UserController.store);

module.exports = router;