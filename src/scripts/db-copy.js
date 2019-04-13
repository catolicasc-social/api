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

const config = {
  'PROD': {
    "type": "service_account",
    "project_id": "comida-catolica",
    "private_key_id": "3d7e6e1e6b78385331ab3318ef62f241dd957556",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyOvTSjE8TO4SB\naM24UVI+bordDHkHmvZdRWR5j8kwoo70i06x1iXMG6KZNqK2BB1wmbZeF3aHW1e8\nuDzaeYQhLSwRlacjcmhRgd3cHoJyy4FUFPqiH4sVUvFYHI/ySvykOYovet9OXxB2\ni/78UdzKC8pdMWIsumIUQIRy3/QDysnDZIMO/LV/3umIkO2zqQz741mLFdCiTnRA\njfdHfYv2YzuU0cpq8KVMcRXMVnF+UWHKweC4+aCo53NYd/VDWiZGh3QfOlcfyKnn\nAyPaSx1q/NF5Ct9sJmbYFiC1i8BgOtemzE7UjV+AqzuNSwSrDEAcn+uUgGE6PhUB\nDCWDf5FjAgMBAAECggEAAZEzdhvscu+3SL9lRYVlTzYr03nah5Aeex56VJja406i\nnyMXMfSybpZFKgx/9BY0SmjSk+l8P1gidZwlSqrocab7KVlHkl+baFWOVP4RzPpL\nnEYMfoq2Q5ZSw8kbtblSBNkW5/XGMKTtuQCP4VNzH25+vPBF+9o3TqbS+xjsb0wH\nlQ/3qhwwOimg2WeAO62EcVNmM3Kyrk8AChEDLtYpUqfLF/IBG6Tdyk1VPsvsuE0X\n/iLmVE86Jz1UYoWt6hXIknrcfwAePiK7to1N1c6w5Up67za/+tcFGnlvjGHbiP1E\nICXIBhUieI3DzHV8v8lB1uZxQ0639ewi1R64o53CjQKBgQD2VHYW0dpAE7zLP/sE\nT3CVX2ukitDj8eeTFDGM+V3Ue2mvEhSsouPxnZEmo8YAbSHANtkx76eRStGYkgmL\np5SJIJzNKMGAj+Vdo7+7ZHI9m2wf2TaFm+P4HNec5MCiJbFuanLnG5YrfvmzNwgy\n4u/wpznJFmcJ6Jg0sQvdQ1YJRQKBgQC5Oh12MxwGrWRi9eKDTzLSnAYXb2x2Gcup\nXebmQ1jrpSahMeOOm77Rj/o2PfH9BX2CIBGF8cWIhNSMKrroALjdP5qZV3yVDtKn\nzp/8atMpS5ma+JG5hnp+q1ecRbNmoX9J4RzrXywmuQhQFHNdSiXoPL98n+66S5ua\nSfElR23WhwKBgQDA3+NS/N/KOmoiLyep+VWq7/sF7Fehk8ECLdaajorEnBllJmAf\nyK94eSq1OZkIrmq16XxpGEB5iD7TGs30lrO8J1f/YAEbXBB5IIU5Am5dBLxFt7t0\nJFr85ACDba3TiHYEgb8UbEpKJnL3u4hk58J+CUI6zJrDbGb5IwOqLVZJjQKBgGPA\nVml3cNpvuqZIwSnyFu6xM96fFQwtLC8T8OuEzXhqQnmBAomkeoklPpzDk3St5j+T\nwZwe7kBtOIIb6PhUmzobrMh0AxXLG8tfTW2Eoh+VJS3+O4xsTb+1ysLQDqNwyboh\nz486e+6Gq2FlAhP1gKCnRoB5KPmPCkd3FrT62L41AoGBAO4e2gHq5HRbeEKuDhj9\nhhhvMJBYiOd5jKml9lqrbNPI5hdHOX+e8ofcStHU5MkWhYoV9oYQaRUHd16dLU2s\npr+yI60ECIsiyfCrxg+xCRFh7Ks5m7rzquFjuicbwxrgEn9NIzb2lZcpLyWDWnmd\nr5TG9873nPLshQQPNk7s9sLu\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ecos8@comida-catolica.iam.gserviceaccount.com",
    "client_id": "109149780443508678186",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ecos8%40comida-catolica.iam.gserviceaccount.com"
  },
  'DEV': {
      apiKey: 'AIzaSyAACm0fEo48c12i7ngCPJ2_vRypPi-T8Og',
      authDomain: 'comida-dev.firebaseapp.com',
      databaseURL: 'https://comida-dev.firebaseio.com',
      projectId: 'comida-dev',
      storageBucket: 'comida-dev.appspot.com',
      messagingSenderId: 898055910694
  }
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

const copyFireStoreDB = async (from, to) => {

};

let dbProd = loadFirestore(config.PROD);
dbProd.getCollections().then(collections =>
  collections.forEach(collection => {
    collection.listDocuments().then(docs => {
      docs.forEach(doc => {
        console.log(doc);
      });
      
    });
  })
);


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