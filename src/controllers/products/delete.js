const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let productId = req.params.id;
    let message = `Product ${ productId } was deleted!`;
    //firestore.collection("produto").get(productId).delete().then( () => 
    res.json({msg: message});
    console.log(message);
    //).catch( error =>
    //    console.log(error)
    //);
};
