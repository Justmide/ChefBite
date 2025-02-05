import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7waZn6WLekr13N3lrriE33LysTarj-O4",
  authDomain: "chefbite-4d7a6.firebaseapp.com",
  projectId: "chefbite-4d7a6",
  storageBucket: "chefbite-4d7a6.appspot.com",
  messagingSenderId: "1047172410479",
  appId: "1:1047172410479:web:17072fcaffcdb649eeb19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

const signBtnEl = document.getElementById('signBtn');

const signUP = async () => {
  try {
    const emailEl = document.getElementById('emailInp');
    const passwordEl = document.getElementById('passwordInp');

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    // Validate if email or password is empty
    if (!email || !password) {
      alert("Please proceed to sign up.");
      return false;
    }


    // Create a user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('Account created successfully:', user);

    // Save user details to Firestore
    // const userDoc = doc(db, "users", user.uid); // Use user's UID as the document ID
    // await setDoc(userDoc, {
    //   email: user.email,
    //   uid: user.uid,
    //   createdAt: new Date()
    // });

    // console.log('User details saved to Firestore');
  } catch (error) {
    console.error('Error creating account:', error.message);
  } finally {
    console.log('Sign-up process completed.');
  }
};

signBtnEl.addEventListener("click", async () => {
    try {
        const success = await signUP(); // Run the sign-up process
        if (success) {
          window.location.href = "../index.html"; // Navigate only if sign-up was successful
        }
      } catch (error) {
        console.error("Error during sign-up process:", error.message);
      }
  });
  

