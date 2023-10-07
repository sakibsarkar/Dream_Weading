import auth from "../../Firebase-config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null)

const UserAuth = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [location, setlocation] = useState({})
    const googleLogIn = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const gitHubLogIn = () => {
        setLoading(true)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (User) => {
            setUser(User)
            setLoading(false)

        })

    }, [user])
    const authentications = {
        googleLogIn,
        gitHubLogIn,
        signInWithEmail,
        createUserWithEmail,
        signOutUser,
        loading,
        user,
        setUser,
        setlocation,
        location
    }


    return (
        <UserContext.Provider value={authentications}>
            {
                children
            }
        </UserContext.Provider>
    );
};

export default UserAuth;