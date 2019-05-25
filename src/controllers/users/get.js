const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let userId = req.params.id;
    res.json({ id: userId });
};
