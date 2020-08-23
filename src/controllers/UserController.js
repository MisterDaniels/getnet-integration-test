const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { name } = req.body;

        const newUser = new User({
            name: name
        });

        newUser.save();

        return res.json(newUser);
    }

}