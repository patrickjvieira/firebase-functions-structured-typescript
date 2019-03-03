import * as functions from 'firebase-functions'

module.exports = functions.https.onRequest((request, response) => {
    response.send('Hello from Firebase 1!\n\n');
});
