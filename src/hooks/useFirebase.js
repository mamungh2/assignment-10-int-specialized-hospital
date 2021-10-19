import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebasse.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     setError('');
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }

    const createUserUsingEmailAndPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUserName(name);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        // .then(result => {
        //     setUser(result.user);
        //     setError('');
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return {
        user, setError, error, signInUsingGoogle, createUserUsingEmailAndPassword, signInUsingEmailAndPassword, logOut
    }
}

export default useFirebase;