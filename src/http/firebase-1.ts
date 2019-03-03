import * as functions from 'firebase-functions'

module.exports = functions.https.onRequest((request, response) => {
    response.send('Hello from firebase 2!\n\n');
});
