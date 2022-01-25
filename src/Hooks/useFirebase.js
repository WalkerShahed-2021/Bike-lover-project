import { useEffect, useState } from "react";
import initailaizAthuntication from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, onAuthStateChanged , signInWithPopup,  GoogleAuthProvider , signInWithEmailAndPassword , signOut, createUserWithEmailAndPassword } from "firebase/auth";


 initailaizAthuntication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const RegisterUser = (email, password, name) => {
      console.log(email, password, name);
       setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
              setAuthError('');
              const newUser = {email, displayName: name};
              setUser(newUser);
              saveUser(email, name, 'POST');
            })
            .catch((error) => {
              setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    const logInUser = (email, password, location, history) =>{
      const destination = location?.state?.from || '/';
      history.replace(destination);
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
    
    }

    const signInWithGoole = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, GoogleProvider)
          .then((result) => {
              const user = result.user;
              const destination = location?.state?.from || '/';
              history.replace(destination);
              setAuthError('');
              saveUser(user.email, user.displayName, 'PUT');

          }).catch((error) => {
              setAuthError(error.message);
          }).finally(() => setIsLoading(false));
  }

    useEffect(() =>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
 
          return () => unsubscribe;
    },[])

    useEffect(() => {
       fetch(`http://localhost:5000/users/${user.email}`)
       .then(res => res.json())
       .then(data => setAdmin(data.admin));
    },[user.email])

    const logOut = () =>{
      setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users',{
          method: method,
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        RegisterUser,
        logOut,
        logInUser,
        isLoading,
        authError,
        auth,
        signInWithGoole,
        saveUser,
    }
}


export default useFirebase;