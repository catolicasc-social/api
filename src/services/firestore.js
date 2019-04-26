var firebase = require('firebase-admin');
var cfg = require('../../config');

const loadFirestore = (config) => {
    try {
        firebase.initializeApp({
        credential: firebase.credential.cert(config),
        databaseURL: config.databaseURL
        });
    } catch (error) {
        if (!/already exists/.test(error.message)) 
            console.log(`Firebase didn't initialize correctly: ${error.message}`);
    }

    return firebase.firestore();
};


module.exports = loadFirestore(cfg.firebase);