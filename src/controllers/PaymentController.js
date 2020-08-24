const User = require('../models/User');

module.exports = {

    async credit(req, res) {
        const { userId, buyOrderId, cardData } = req.body;
        
    },

    async debit(req, res) {
        const { userId, buyOrderId, cardData } = req.body;

        const newUser = new User({
            name: name
        });

        newUser.save();

        return res.json(newUser);
    }

}