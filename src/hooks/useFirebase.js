import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged} from "firebase/auth";
import firebaseInitialization from '../Firebase/firebase.init';

firebaseInitialization();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth=getAuth();

    const [user,setUser]=useState({});
    const [error,setError]=useState('');


    const signInUsingGoogle=()=>{

     return signInWithPopup(auth,googleProvider)
        
        // .then(result=>{
        //     setUser(result.user);

        // }).catch(error=>{
        //     setError(error.massage);

        // });

    }

    const logout=()=>{
        signOut(auth).then(()=>{
            console.log('logout');
            setUser({});
            
        }).catch(error=>{
            setError(error.massage);
        })

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
             
            } 
          });
          
    },[auth]);


    
    console.log(user);

    return {user,error,signInUsingGoogle,logout}

};

export default useFirebase;