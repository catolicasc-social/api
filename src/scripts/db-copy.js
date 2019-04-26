const banco = require('./firebase_structure.js');
const firebase = require("firebase-admin");
//require("firebase/firestore");

const loadFirestore = (config) => {
  firebase.initializeApp({
    credential: firebase.credential.cert(config),
    databaseURL: config.databaseURL
  });
  return firebase.firestore();
};

const appendFileChanges = async (firestoreDB) => {
  for (var collectionKey in databaseStructure){
    let values = databaseStructure[collectionKey];
    let collectionReference = firestoreDB.collection(collectionKey);
    let batch = firestoreDB.batch();

    const collection = collectionReference.doc();
    values.forEach( item => {
      batch.set(collection, {
        ...item
      });
    });

    batch.commit().then(
      () => console.log(`Colletion ${ collectionKey } committed.`)
    ).catch( 
      error => console.log(`An Error ocurred in ${ collectionKey }: ${ error }`)
    );
  }
};

const getAllCollectionsAndInnerDocuments = (doc) => {
  let data = {};
  from.getCollections().then(collections =>
    collections.forEach(collection => {
      collection.get().then(col => console.log(col));
      
      collection.listDocuments().then(docs => {
        docs.forEach(doc => {
          console.log(doc.data());
        });
        
      });
    })
  );
  return data;
}

const copyFireStoreDB = async (from, to) => {
  let fromData = getAllCollectionsAndInnerDocuments(from);
  
};


/*

const batchDocs = async (collection, values) => {
    console.log(`Creating ${collection}`);
  
    const db = await initFirebase();
    const colRef = db.collection(collection);
  
    const batch = db.batch();
  
    values.forEach(item => {
      const ref = colRef.doc();
      batch.set(ref, {
        ...item
      });
    });
  
    return batch
      .commit()
      .then(() => {
        console.log(`Finished ${collection}`);
      })
      .catch(error => {
        console.log(`Error in ${collection}: ${error}`);
      });
  };
  
  (async () => {
    try {
      await batchDocs('customers', customers);
      await batchDocs('products', products);
      await batchDocs('orders', orders);
      process.exit();
    } catch (error) {
      console.log(`Something went wrong -> ${error}`);
      process.exit();
    }
  })();
  */