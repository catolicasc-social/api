const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    res.json({id: req.params.id, body: req.params});
};
