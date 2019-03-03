import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

module.exports = functions.auth.user().onCreate((user) => {

    const db: FirebaseFirestore.Firestore = admin.firestore();

    db.collection('FirebaseAuthTest').doc(`${user.uid}`).set({ uid: user.uid }).then( _ => {
        return true;
    }).catch( _ => {
        return false;
    });


});
