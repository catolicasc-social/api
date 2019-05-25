const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let productId = req.params.id;
    res.json({ id: productId });
};
