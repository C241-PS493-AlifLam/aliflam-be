const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

const addData = async (request, h) => {
    const data = request.payload;
    const docRef = firestore.collection('your-collection').doc('your-document');
    await docRef.set(data);
    return h.response('Document added successfully').code(201);
};

module.exports = {
    addData
};
