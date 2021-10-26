export const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
        // make async call to database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => { // Callback function
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => { // Callback function
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};