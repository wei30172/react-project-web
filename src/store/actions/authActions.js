export const signIn = (credential) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credential.password
        ).then(() => { // Callback function
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch((err) => { // Callback function
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signOut().then(() => { // Callback function
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const firestore = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, 
            newUser.password
        ).then(resp => {

            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });
    }
}