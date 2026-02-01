import firestoreDB from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { data } from "react-router-dom";
// import crypto

export const CreateUser = async (payload) => {
    try {

        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
        );

        if (payload?.name) {
            await updateProfile(userCredential.user, {
                displayName: payload.name
            });
        }

        const userId = userCredential.user.uid;

        // Record in DB
        const userDocRef = doc(firestoreDB, "users", userId);
        await setDoc(userDocRef, {
            userId,
            name: payload.name || "",
            email: payload.email,
            createdAt: serverTimestamp()
        })


        return {
            success: true,
            message: "User created successfully",
            userId,
        }

    } catch (error) {
        return {
            success: false,
            message: error?.message || "Something went wrong",
            code: error?.code
        };
    }
}

export const LoginUser = async(payload)=>{
    try {

        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth, payload.email, payload.password)
        
        return{
            success: true,
            message: "Successful login",
            data: user
        }
        
    } catch (error) {
        return {
            success: false,
            message: error?.message || "Something went wrong",
            code: error?.code
        };
    }
}