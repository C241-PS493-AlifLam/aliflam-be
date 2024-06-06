const { Firestore } = require('@google-cloud/firestore');

// Create a new instance of Firestore
const firestore = new Firestore();

const addData = async (request, h) => {
    const data = request.payload;
    // Here you're accessing a Firestore collection
    const docRef = firestore.collection('users').doc('8PcNCKyrcYLcV66jdI6Q');
    // Setting data to Firestore
    await docRef.set(data);
    return h.response('Document added successfully').code(201);
};

module.exports = {
    addData
};
