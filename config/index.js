module.exports = {
    EXPRESS_CONFIG: {
        PORT: process.env.PORT,
    },
    FIREBASE_PRODUCAO: {
      },
    FIREBASE_DESENVOLVIMENTO: {
      }
};

module.exports.firebase = module.exports["FIREBASE_" + process.env.BANCO];