const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let userId = req.params.id;
    let message = `User ${ productId } was deleted!`;
    //firestore.collection("produto").get(productId).delete().then( () => 
    res.json({msg: message});
    console.log(message);
    //).catch( error =>
    //    console.log(error)
    //);
};
