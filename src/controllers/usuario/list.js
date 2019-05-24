const firestore = require("../../services/firestore");

module.exports = (req, res) => {
    let listUsuarios = [];
    firestore.collection("usuario").get().then( users =>{
        users.forEach( user =>{
            listUsuarios.push({'id': user.id ,...user.data() });
        });

        res.json(listUsuarios);
    }
    ).catch( error =>
        console.log(error)
    );
    
}