import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebasse.init";

initializeAuthentication();

const useFirebase = () => {
    // use state function to store data
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // get authentication and provider from google firebase authentication
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in method using google
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // create new user using name, email and password
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

    // set user name when creating a new user or sign in using google
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch(error => {
                setError(error.message);
            })
    }

    // sign in method using email and password
    const signInUsingEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // set observer method to observer a user sign in or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    // set log out method to log out a user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => {
                setUser({});
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user, setError, isLoading, setIsLoading, error, signInUsingGoogle, createUserUsingEmailAndPassword, signInUsingEmailAndPassword, logOut
    }
}

export default useFirebase;