const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let listProdutos = [];
    firestore.collection("produto").get().then( produtos =>{
        produtos.forEach( produto =>{
            listProdutos.push({'id': produto.id,  ...produto.data() });
        });

        res.json(listProdutos);
    }
    ).catch( error =>
        console.log(error)
    );
    
}