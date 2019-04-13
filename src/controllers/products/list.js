module.exports = (req, res) => {
    //let products = Firebase.getallProducts
    let products = {
        'COD1': {
            'nome': 'ProdutoTeste'
        }
    };
    
    res.json(products);
}