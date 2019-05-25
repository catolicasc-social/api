const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let doc = firestore.collection("users").doc(req.params.id);
    doc.get().then(user => {
        if (user.data()) {
            doc.update(req.query).then(user => { res.json(user); });
        } else {
            res.json("Usuário não encontrado.");
        }
    }).catch(error => {
        console.log(error);
    });
}